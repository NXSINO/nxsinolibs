layui.define(["table", "form"],
function(t) {
    var e = layui.$,
    i = layui.table,
    n = layui.form;
    i.render({
        elem: "#LAY-app-content-list",
        url: layui.setter.base + "json/content/list.js",
        cols: [[{
            type: "checkbox",
            fixed: "left"
        },
        {
            field: "id",
            width: 100,
            title: "套餐ID",
            sort: !0
        },
        {
            field: "label",
            title: "套餐时长",
            minWidth: 100
        },
        {
            field: "title",
            title: "文章标题"
        },
        {
            field: "author",
            title: "作者"
        },
        {
            field: "uploadtime",
            title: "上传时间",
            sort: !0
        },
        {
            field: "status",
            title: "发布状态",
            templet: "#buttonTpl",
            minWidth: 80,
            align: "center"
        },
        {
            title: "操作",
            minWidth: 150,
            align: "center",
            fixed: "right",
            toolbar: "#table-content-list"
        }]],
        page: !0,
        limit: 10,
        limits: [10, 15, 20, 25, 30],
        text: "对不起，加载出现异常！"
    }),


    i.on("tool(LAY-app-content-list)",
    function(t) {
        var e = t.data;
        "del" === t.event ? layer.confirm("确定删除此文章？",
        function(e) {
            t.del(),
            layer.close(e)
        }) : "edit" === t.event && layer.open({
            type: 2,
            title: "编辑文章",
            content: "../../../views/app/content/listform.html?id=" + e.id,
            maxmin: !0,
            area: ["550px", "550px"],
            btn: ["确定", "取消"],
            yes: function(e, i) {
                var l = window["layui-layer-iframe" + e],
                a = i.find("iframe").contents().find("#layuiadmin-app-form-edit");
                l.layui.form.on("submit(layuiadmin-app-form-edit)",
                function(i) {
                    var l = i.field;
                    t.update({
                        label: l.label,
                        title: l.title,
                        author: l.author,
                        status: l.status
                    }),
                    n.render(),
                    layer.close(e)
                }),
                a.trigger("click")
            }
        })
    });
});