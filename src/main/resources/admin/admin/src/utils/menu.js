const menu = {
    list() {
        return [
    {
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"管理员管理",
                        "menuJump":"列表",
                        "tableName":"users"
                    }
                ],
                "menu":"管理员管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"快递员管理",
                        "menuJump":"列表",
                        "tableName":"kuaidiyuan"
                    }
                ],
                "menu":"快递员管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"用户管理",
                        "menuJump":"列表",
                        "tableName":"yonghu"
                    }
                ],
                "menu":"用户管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"公告管理",
                        "menuJump":"列表",
                        "tableName":"gonggao"
                    }
                ],
                "menu":"公告管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"货物管理",
                        "menuJump":"列表",
                        "tableName":"huowu"
                    }
                    ,
                    {
                        "buttons":[
                            "订单",
                            "查看",
                            "删除"
                        ],
                        "menu":"货物订单管理",
                        "menuJump":"列表",
                        "tableName":"huowuOrder"
                    }
                ],
                "menu":"货物管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"订单分配管理",
                        "menuJump":"列表",
                        "tableName":"huowuFenpei"
                    }
                ],
                "menu":"订单分配管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"留言板管理",
                        "menuJump":"列表",
                        "tableName":"liuyan"
                    }
                ],
                "menu":"留言板管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"网点信息管理",
                        "menuJump":"列表",
                        "tableName":"wangdian"
                    }
                ],
                "menu":"网点信息管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"公告类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryGonggao"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"货物类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryHuowu"
                    }

                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"订单类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryHuowuOrderFenpei"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"网点类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryWangdian"
                    }
                ],
                "menu":"基础数据管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"轮播图管理",
                        "menuJump":"列表",
                        "tableName":"config"
                    }
                ],
                "menu":"轮播图信息"
            }
            /*,{
			    "child":[
			        {
			            "buttons":[
			                "查看"
			            ],
			            "menu":"数据备份",
			            "menuJump":"列表",
			            "tableName":"beifen"
			        },
					{
					    "buttons":[
					        "查看"
					    ],
					    "menu":"数据还原",
					    "menuJump":"列表",
					    "tableName":"huanyuan"
					}
			    ],
			    "menu":"数据库管理"
			}*/
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"管理员",
        "tableName":"users"
    },
            {
                "backMenu":[
                   {
                        "child":[
                            {
                                "buttons":[
                                    "查看",
                                ],
                                "menu":"公告管理",
                                "menuJump":"列表",
                                "tableName":"gonggao"
                            }
                        ],
                        "menu":"公告管理"
                    }
                    // ,{
                    //     "child":[
                    //         {
                    //             "buttons":[
                    //                 "查看",
                    //             ],
                    //             "menu":"货物管理",
                    //             "menuJump":"列表",
                    //             "tableName":"huowu"
                    //         }
                    //         ,
                    //         {
                    //             "buttons":[
                    //                 "订单",
                    //             ],
                    //             "menu":"货物订单管理",
                    //             "menuJump":"列表",
                    //             "tableName":"huowuOrder"
                    //         }
                    //     ],
                    //     "menu":"货物管理"
                    // }
                    ,{
                        "child":[
                            {
                                "buttons":[
                                    "查看",
                                ],
                                "menu":"订单分配管理",
                                "menuJump":"列表",
                                "tableName":"huowuFenpei"
                            }
                        ],
                        "menu":"订单分配管理"
                    }
                    ,{
                        "child":[
                            {
                                "buttons":[
                                    "查看",
                                ],
                                "menu":"留言板管理",
                                "menuJump":"列表",
                                "tableName":"liuyan"
                            }
                        ],
                        "menu":"留言板管理"
                    }
                    ,{
                        "child":[
                            {
                                "buttons":[
                                    "查看",
                                ],
                                "menu":"网点信息管理",
                                "menuJump":"列表",
                                "tableName":"wangdian"
                            }
                        ],
                        "menu":"网点信息管理"
                    }
                    /*,{
                        "child":[
                            {
                                "buttons":[
                                    "查看"
                                ],
                                "menu":"数据备份",
                                "menuJump":"列表",
                                "tableName":"beifen"
                            },
                            {
                                "buttons":[
                                    "查看"
                                ],
                                "menu":"数据还原",
                                "menuJump":"列表",
                                "tableName":"huanyuan"
                            }
                        ],
                        "menu":"数据库管理"
                    }*/
                ],
                "frontMenu":[],
                "hasBackLogin":"是",
                "hasBackRegister":"否",
                "hasFrontLogin":"否",
                "hasFrontRegister":"否",
                "roleName":"快递员",
                "tableName":"kuaidiyuan"
            }
]
    }
}
export default menu;
