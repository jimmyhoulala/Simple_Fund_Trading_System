<template>
    <div class="team-intro-container">
        <div class="system-summary">
            <h1>理财销售交易系统——训练营第三小组</h1>
            <p style="font-size:large;margin-top: 30px;margin-left:60px;margin-right:60px;text-align: left;">
                本理财销售交易系统主要用于投资者到达基金公司柜台以后，由柜台人员为其在系统中进行开户、交易等功能。
                同时为了完成交易功能，系统还需要有一定的基础数据维护的功能。它主要包含的功能模块包括：产品管理、开户、申购、赎回、清算、业务查询等。
                本系统已完成所有指定需求，为银行柜员提供了全面的理财销售和交易服务，提升了工作效率和客户满意度。
            </p>
        </div>

        <div class="team-info-container">
            <div class="team-info">
                <h3>团队成员</h3><br />
                <h4>前端开发</h4><br />
                <ul>
                    <li>朱开来 - 前端工程师</li><br />
                    <li>侯青山 - 前端工程师</li><br />
                    <li>柏云迪 - 前端工程师</li><br />
                </ul>

                <h4>后端开发</h4><br />
                <ul>
                    <li>唐巍祚 - 后端工程师</li><br />
                    <li>陈语妍 - 后端工程师</li><br />
                    <li>陈天乐 - 后端工程师</li><br />
                </ul>
            </div>

            <div class="team-logo">
                <img :src=teamlogo alt="团队Logo" />
            </div>
        </div>
    </div>
</template>

<script>
import teamlogo from "@/assets/team-logo.png"
export default {
    name: "TeamIntro",
    data() {
        return {
            teamlogo,
        }
    }
};
</script>

<style scoped>
.team-intro-container {
    padding: 20px;
    font-family: Arial, sans-serif;
    margin: 10px;
    background-color: #ffffff;
    border: 1px solid #ccc;
    border-radius: 5px;
    height: 91vh;
}

.system-summary {
    text-align: center;
    margin-bottom: 30px;
}

.team-info-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    font-size: large;
    margin-top: 30px;
    margin-left: 60px;
    margin-right: 60px;
}

.team-info {
    width: 60%;
}

.team-info h4 {
    margin-top: 20px;
}

.team-info ul {
    list-style-type: none;
    padding-left: 0;
    margin: 0;
    line-height: 1.0;
}

.team-info li {
    margin-bottom: 5px;
}

.team-logo {
    width: 60%;
    height: 60%;
    text-align: center;
    margin-top: 100px;
    margin-left: 180px;
}

.team-logo img {
    max-width: 100%;
    height: auto;
    transform: scale(1.5);
}
</style>