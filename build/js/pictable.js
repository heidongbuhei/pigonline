(function () {

    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main'));
    var myChaot = echarts.init(document.getElementById('maon'));

    // 指定图表的配置项和数据
    var option1 = {

        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series : [
            {
                name: '数据',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:83, name:'育肥舍'},
                    {value:57, name:'小猪舍'},
                    {value:45, name:'妊娠3舍'},
                    {value:5, name:'配怀舍'},
                    {value:1, name:'公猪舍'},
                    {value:89, name:'地圈6'},
                    {value:25, name:'特售猪'},
                    {value:2, name:'产房1'},
                    {value:2, name:'产房2'},
                    {value:99, name:'保育5'},
                    {value:100, name:'保育4'},
                    {value:88, name:'保育3'},
                    {value:190, name:'保育1'},
                    {value:279, name:'3号舍'},
                    {value:1305, name:'一号舍'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    var option2 = {

        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series : [
            {
                name: '数据',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:845, name:'后备母猪845'},
                    {value:1, name:'公猪1头'},
                    {value:194, name:'育肥194头'},
                    {value:0, name:'保育0头'},
                    {value:0, name:'生长猪0头'},
                    {value:1376, name:'仔猪1376头'},
                    {value:0, name:'分娩母猪0头'},
                    {value:83, name:'妊娠母猪83头'},
                    {value:0, name:'空怀母猪0头'}

                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option2);
    myChaot.setOption(option1);
})();