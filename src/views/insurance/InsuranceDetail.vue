<template>
  <div class="isr-d-page">
    <detail-header
      :isrDetail="insuranceDetail"
    ></detail-header>
    <detail-content
      :isrDetail="insuranceDetail"
      :ageSelect="ageSelect"
      :withAge="true"
      @changeAge="changeAge"
    ></detail-content>
    <detail-datepicker
      :ageSelect="ageSelect"
    ></detail-datepicker>
    <detail-create
      :isrDetail="insuranceDetail"
    ></detail-create>
  </div>
</template>

<script>
  import DetailHeader from "./insuranceDetail/DetailHeader"
  import DetailContent from "./insuranceDetail/DetailContent"
  import DetailDatepicker from "./insuranceDetail/DetailDatepicker"
  import DetailCreate from "./insuranceDetail/DetailCreate"
  import { Indicator } from 'mint-ui'

  export default {
    data: function () {
      return {
        type: 0, // 0单次，1一年多次，2一年一次
        minDay: 3,
        ageSelect: 0
      }
    },
    components: {
      DetailHeader,
      DetailContent,
      DetailDatepicker,
      DetailCreate
    },
    computed: {
      totalDay () {
        return (startDate.getTime() - endDate.getTime())/24/60/60/1000;
      },
      productId () {
        return this.$store.state.insurance.productId;
      },
      insuranceDetail () {
        return this.$store.state.insurance.productDetail;
      },
      startDate () {
        return this.$store.state.insurance.startDate;
      },
      endDate () {
        return this.$store.state.insurance.endDate;
      }
    },
    created () {
      let url = "/api/insurance/info";
      let send = { id: this.$route.params.id };
      if (this.$route.params.id === this.productId) {
        return false;
      }
      this.$store.commit("resetInsuranceState");
      Indicator.open('拼命读取保险数据中...');
      this.$http.get(url, { params: send }).then((response) => {
        console.log(JSON.parse(response.body));
        let body = JSON.parse(response.body);
        if (body.status === 1) {
          this.$store.commit("setInsuranceDetail", {
            id: this.$route.params.id,
            detail: body.data
          });
          Indicator.close();
        } else {
          console.log("服务器错误");
          Indicator.close();
        }
      })
    },
    methods: {
      changeAge (n) {
        this.ageSelect = n;
      }
    }
  }
</script>

<style lang="less" scoped>
  .isr-d-page {
    padding-bottom: 2.5rem;
  }
</style>
