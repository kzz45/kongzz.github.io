---
home: true
heroImage: /walle.png
heroText: 运维管理平台
actionText: 马上体验
actionLink: http://localhost:9595/#/dashboard
features:
- title: 业务管理
  details: 通过业务树的形式来展现并管理公司的游戏和平台业务，可以快速定位业务具体使用的资源，如机器、MySQL、Redis和域名等资源。

- title: 资源管理
  details: 公司的本地化CMDB资源管理平台，所有的资源都是从云(阿里云、腾讯云等)上同步而来，从而在本地进行记录和管理。

- title: 作业平台
  details: (Jobs)是公司的基础作业操作平台，具备万级并发处理能力。支持脚本执行、命令执行、定时任务等一系列的基础运维场景，还可以通过编排的理念将单个任务组装成一个作业流。

- title: 监控平台
  details: 公司的基础监控平台，基于原生Prometheus alertmanager进行开发，具有丰富的监控指标，可以满足公司的不同的业务场景。

- title: 容器平台
  details: 公司本地化容器管理平台，基于原生Kubernetes来开发。

- title: 工单管理
  details: 公司的工单管理系统，目的是让所有运维工单有记录可查，并且在用户提交的工单过程中，不必关心具体参数配置等，所有历史工单会形成工单模板来进行沉淀。

footer: MIT Licensed | Copyright © 2018
---

## 启动后端服务

```sh
python3 manage.py runserver
celery -A dops worker -l info
```

## 启动前端服务

```sh
npm install -D
npm run dev
```