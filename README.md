# 简易基金理财销售系统 / Simple Fund Management Sales System

## 项目简介 / Project Overview

**简易基金理财销售系统** 是一款专为投资者在基金公司柜台办理开户、交易等功能的系统。该系统不仅提供基础数据维护，还包括产品管理、开户、申购、赎回、清算和业务查询等功能模块，旨在提升柜台工作人员的工作效率，同时为投资者提供简便的交易体验。此系统为恒生金融科技创新训练营项目的一部分，当前为初始版本，未来将继续优化和迭代。

**Simple Fund Management Sales System** is a system designed for investors to perform account opening, trading, and other operations at the fund company's counter. In addition to basic data maintenance, the system includes modules for product management, account opening, subscription, redemption, settlement, and business inquiries. The system aims to improve the efficiency of counter staff while providing investors with a seamless trading experience. This system is part of Hundsun Financial Technology Innovation Training Camp project, and it is an initial version, with future optimizations and iterations planned.

---

## 功能概述 / Feature Overview

1. **产品管理**: 展示、添加、删除和编辑基金产品信息，支持查看产品净值趋势图。
   - **Product Management**: Display, add, delete, and edit fund product information, with support for viewing product NAV trend charts.
   
2. **开户**: 录入客户基本信息、银行卡信息和风险承受能力。
   - **Account Opening**: Enter customer basic information, bank card details, and risk tolerance.
   
3. **申购**: 支持客户申购基金产品，并验证资金和风险等级。
   - **Subscription**: Allow customers to subscribe to fund products, verifying funds and risk levels.
   
4. **赎回**: 支持客户赎回已购买的基金产品。
   - **Redemption**: Allow customers to redeem previously purchased fund products.
   
5. **清算**: 执行每日交易确认，更新账户余额和基金净值。
   - **Settlement**: Perform daily trade confirmation, update account balances and fund NAVs.
   
6. **业务查询**: 提供交易查询和撤单功能。
   - **Business Inquiry**: Provide transaction query and order cancellation functions.

---

## 目标用户 / Target Users

- **柜台人员 / Counter Staff**: 负责为投资者提供开户、交易等服务。
- **客户服务人员 / Customer Service Staff**: 负责解答投资者的查询和问题。
- **系统管理员 / System Administrators**: 负责系统的整体管理和维护。

---

## 技术栈 / Technologies Used

- **前端 / Frontend**: 基于Vue.js的Web前端界面
- **后端 / Backend**: 使用Springboot框架进行开发
- **数据库 / Database**: MySQL
- **其他依赖 / Other Dependencies**: 无

---

## 系统特点 / System Features

- **高效性 / Efficiency**: 提高柜台交易速度和准确性，减少人工操作错误。
- **简洁易用 / Simple and Easy to Use**: 界面简洁，操作直观，减少培训时间。
- **安全性 / Security**: 确保交易数据的安全性，符合相关法规要求。

---

## 文件结构 / File Structure

- `/hundsun-fsms-frontend`: 前端代码 / Frontend Code
- `/hundsun-fsms-backend`: 后端与数据库代码 / Backend Code
- `/docs`: 项目文档与展示 / Project Documentation

---

## 安装与运行 / Installation and Running

克隆代码仓库 / Clone the repository:
   ```bash
   git clone https://github.com/jimmyhoulala/Simple_Fund_Trading_System.git
