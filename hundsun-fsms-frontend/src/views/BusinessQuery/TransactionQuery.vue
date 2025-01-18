<template>
    <div class="query-main">
        <h3>交易查询</h3>
        <h-card :border="false" style="margin-bottom:20px" dis-hover>
            <h-form :inline="true" label-width="100px">
                <h-form-item label="交易单号">
                    <h-input v-model="searchParams.transaction_id" />
                </h-form-item>
                <h-form-item label="用户ID">
                    <h-input v-model="searchParams.customer_id" />
                </h-form-item>
                <h-form-item label="用户证件号码">
                    <h-input v-model="searchParams.customer_creditcard_id" />
                </h-form-item>
                <h-form-item label="账号">
                    <h-input v-model="searchParams.account_id" />
                </h-form-item>
                <h-form-item label="产品ID">
                    <h-input v-model="searchParams.fund_id" />
                </h-form-item>

                <h-form-item label="交易类型">
                    <h-select v-model="searchParams.transaction_type">
                        <h-option label="申购" value=1></h-option>
                        <h-option label="赎回" value=0></h-option>
                    </h-select>
                </h-form-item>
                <h-form-item label="交易状态">
                    <h-select v-model="searchParams.transaction_state">
                        <h-option label="已完成" value=1></h-option>
                        <h-option label="未确认" value=0></h-option>
                    </h-select>
                </h-form-item>
                <h-form-item label="交易日期">
                    <h-date-picker v-model="searchParams.transaction_date" type="date" format="yyyy-MM-dd"
                        @on-change="handleDateChange" />
                </h-form-item>
                <h-form-item style="margin-top:33px">
                    <h-button type="primary" @click="onSearch">查询</h-button>
                    <h-button @click="onReset">重置</h-button>
                </h-form-item>
            </h-form>
        </h-card>
        <h-table :columns="columns1" :data="currentData"></h-table>
        <div style="position: fixed;bottom: 5%;">
            <h-page :total="total" :page-size="pageSize" @on-change="handlePageChange" show-total></h-page>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pageSize: 10,
            currentPage: 1,
            searchParams: {
                customer_id: '',
                customer_creditcard_id: '',
                transaction_id: '',
                account_id: '',
                fund_id: '',
                transaction_type: '',
                transaction_date: '',
                creditcard_id: '',
                transaction_state: '',
            },
            columns1: [
                {
                    title: "交易单号",
                    key: "transactionId",
                },
                {
                    title: "用户ID",
                    key: "customerId",
                },
                {
                    title: "账号",
                    key: "accountId",
                },
                {
                    title: "产品ID",
                    key: "fundId",
                },
                {
                    title: "交易类型",
                    key: "transactionType",
                    render: (h, params) => {
                        const type = params.row.transactionType;
                        const displayText = type === 1 ? '申购' : '赎回';
                        return h('span', displayText);
                    }
                },
                {
                    title: "交易金额",
                    key: "transactionAmount",
                },
                {
                    title: "交易份额",
                    key: "transactionShare",
                },
                {
                    title: "交易日期",
                    key: "transactionDate",
                    render: (h, params) => {
                        const date = new Date(params.row.transactionDate);
                        const formattedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
                        return h('span', formattedDate);
                    }
                },
                {
                    title: "订单状态",
                    key: "transactionState",
                    render: (h, params) => {
                        const state = params.row.transactionState;
                        const displayText = state === 0 ? '未完成' : '已完成';
                        return h('span', displayText);
                    }
                },
            ],
            data1: [
            ]
        };
    },
    methods: {
        handleDateChange(value) {
            this.searchParams.transaction_date = value;
        },
        onSearch() {
            const params = {
                current: this.currentPage,
                size: 10000,
                transactionId: this.searchParams.transaction_id,
                customerId: this.searchParams.customer_id,
                customerIdCard: this.searchParams.customer_creditcard_id,
                accountId: this.searchParams.account_id,
                fundId: this.searchParams.fund_id,
                transactionType: this.searchParams.transaction_type,
                transactionState: this.searchParams.transaction_state,
                transactionDate: this.searchParams.transaction_date ? new Date(this.searchParams.transaction_date).toISOString().split('T')[0] : null,
            };
            console.log(params)
            console.log(params.transactionDate)
            this.$request.get('/transaction/query', { params })
                .then(res => {
                    console.log(res)
                    if (res.data.code === 200) {
                        this.$hMessage.success('查询成功')
                        this.data1 = res.data.data.records
                    } else {
                        this.$hMessage.error(res.data.message)
                    }
                })
        },
        onReset() {
            this.searchParams = {
                transaction_id: '',
                customer_id: '',
                customer_creditcard_id: '',
                account_id: '',
                fund_id: '',
                transaction_type: '',
                transaction_date: '',
                transaction_state: '',
            };
            this.data1 = [];
        },
        handleDetail(row) {
            console.log('View details for:', row);
        },
        handlePageChange(page) {
            this.currentPage = page;
        },
    },
    created() {
        this.onSearch()
    },
    computed: {
        total() {
            return this.data1.length;
        },
        currentData() {
            const start = (this.currentPage - 1) * this.pageSize;
            const end = this.currentPage * this.pageSize;
            return this.data1.slice(start, end);
        },
    }
};
</script>

<style scoped>
h3 {
    margin-bottom: 20px;
}

.h-form {
    margin-bottom: 20px;
}

.query-main {
    margin: 10px;
    padding: 20px;
    background-color: #ffffff;
    border: 1px solid #ccc;
    border-radius: 5px;
    height: 91vh;
}
</style>
