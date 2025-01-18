<template>
    <div class="add-bank-card">
      <h3>添加银行卡</h3>
      <h-card :border="false" class="form-container" dis-hover>
        <div class="form-section">
          <label for="creditcard_id">银行卡号</label>
          <h-input id="creditcard_id" v-model="form.creditcard_id" placeholder="请输入银行卡号" @blur="validateCardNumber" />
          
          <label for="id_card_number">身份证号码</label>
          <h-input id="id_card_number" v-model="form.id_card_number" placeholder="请输入身份证号码" />
  
          <label for="account_selection">选择账户</label>
          <div style="display: flex; align-items: center;">
            <h-select v-model="form.account_id" placeholder="请选择账户">
              <h-option v-for="account in accountsData" :key="account.id" :value="account.id">
                {{ account.id }}
              </h-option>
            </h-select>
            <h-button type="primary" @click="fetchAccounts" style="margin-left: 10px;">查找账户</h-button>
          </div>
  
          <label for="bank_name">开户行</label>
          <h-input id="bank_name" v-model="form.bank_name" placeholder="请输入开户行名称" />
          
          <label for="balance">初始金额</label>
          <h-input id="balance" v-model="form.balance" type="number" placeholder="请输入初始金额" @blur="validateBalance" />
          
          <label for="password">密码</label>
          <h-input id="password" v-model="form.password" type="password" placeholder="请输入密码" />
          
          <label for="confirm_password">确认密码</label>
          <h-input id="confirm_password" v-model="form.confirm_password" type="password" placeholder="请再次输入密码" @blur="validatePassword" />
        </div>
      </h-card>
      <div class="button-section">
        <h-button type="primary" @click="submitForm">添加银行卡</h-button>
        <h-button @click="goBack" style="margin-left: 10px;">返回</h-button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          creditcard_id: '',
          id_card_number: '',
          account_id: '',
          bank_name: '',
          balance: '',
          password: '',
          confirm_password: ''
        },
        accountsData: [] // 初始账户数据为空
      };
    },
    methods: {
      validateCardNumber() {
        const regex = /^[0-9]{16}$/;
        if (!regex.test(this.form.creditcard_id)) {
          this.$hMessage.error("银行卡号格式不正确，应为16位数字");
          return false;
        }
        return true;
      },
      validateBalance() {
        if (this.form.balance < 0) {
          this.$hMessage.error("初始金额不能为负数");
          return false;
        }
        return true;
      },
      validatePassword() {
        if (this.form.password && this.form.password !== this.form.confirm_password) {
          this.$hMessage.error("密码和确认密码不一致");
          return false;
        }
        return true;
      },
      async fetchAccounts() {
        try {
          // 模拟从后台获取账户数据
          const response = await this.getAccountsByIdCard(this.form.id_card_number);
          
          if (response && response.length > 0) {
            this.accountsData = response;
            this.$hMessage.success("成功找到匹配的账户");
          } else {
            this.$hMessage.warning("未找到匹配的账户");
            this.accountsData = [];
          }
        } catch (error) {
          this.$hMessage.error("查找账户时发生错误，请稍后再试");
        }
      },
      async getAccountsByIdCard(idCardNumber) {
        // 模拟的异步调用后台API获取账户数据
        // 实际中应该使用 axios 或者 fetch 来调用后台接口
        return new Promise((resolve) => {
          setTimeout(() => {
            const allAccounts = [
              { id: 'ACC001', id_card_number: '123456789012345678' },
              { id: 'ACC002', id_card_number: '123456789012345678' },
              { id: 'ACC003', id_card_number: '876543210987654321' },
              { id: 'ACC004', id_card_number: '123456789012345678' },
              { id: 'ACC005', id_card_number: '876543210987654321' }
            ];
            
            const accounts = allAccounts.filter(account => account.id_card_number === idCardNumber);
            resolve(accounts);
          }, 1000); // 模拟网络延迟
        });
      },
      submitForm() {
        if (!this.validateCardNumber() || !this.validateBalance() || !this.validatePassword()) {
          return;
        }
        if (!this.form.creditcard_id || !this.form.id_card_number || !this.form.account_id || !this.form.bank_name || !this.form.balance || !this.form.password) {
          this.$hMessage.error("请填写所有字段");
          return;
        }
        // 在此处添加提交逻辑，例如发送API请求
        this.$hMessage.success("银行卡添加成功");
        this.goBack(); // 添加成功后返回上一页
      },
      goBack() {
        this.$router.push({ name: 'AccountManagement-BankCardManagement' });
      }
    }
  };
  </script>
  
  <style scoped>
  .add-bank-card {
    margin: 5px;
    padding: 10px;
    background-color: #ffffff;
    border: 1px solid #ccc;
    border-radius: 5px;
    height: 91vh;
  }
  
  .form-container {
    margin-bottom: 2px;
    margin-top: 20px;
  }
  
  .form-section {
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 10px;
  }
  
  .form-section label {
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  .button-section {
    margin-top: 10px;
    display: flex;
    justify-content: center;
  }
  </style>
  