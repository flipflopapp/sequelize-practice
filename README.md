# Getting Started With Node, Express and Postgres (using Sequelize)

This repo houses code for the blog ["Getting Started with Node, Express and Postgres (using Sequelize)"](https://scotch.io/tutorials/getting-started-with-node-express-and-postgres-using-sequelize)

Code for various sections is separated into branches, so if you're working through the tutorial and you get stuck, you can always checkout the corresponding branch and refer.

Have fun! 😄

# Project DB schema

![db schema](https://github.com/flipflopapp/sequelize-practice/blob/main/docs/db-schema_design.png)

# Development mode postgres setup

Instructions to setup postgres locally.

```
PGDATA=<PATH>
initdb
pg_ctl -D /Users/navalsaini/chiffer/data -l logfile start
createuser --interactive waiyaki
createdb todos-dev
```
