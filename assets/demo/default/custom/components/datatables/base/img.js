$(document).ready(function () {
    var f = $("header img").imgCheckbox({
        "styles": {
            "span.imgCheckbox img": {
                "border-radius": "6px"
            },
            "span.imgCheckbox.imgChked img": {
                "transform": "scale(0.95)",
            },
            "span.imgCheckbox": {
                "border": "none",
            }
        },
        "checkMarkSize": "50px",
        "checkMarkImage": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtMzQ2LjM4NCkiPjxwYXRoIGQ9Ik0zMiAzNDYuMzg0YTMyIDMyIDAgMCAwLTMyIDMyIDMyIDMyIDAgMCAwIDMyIDMyIDMyIDMyIDAgMCAwIDMyLTMyIDMyIDMyIDAgMCAwLTMyLTMyem0yMS4yNTYgMTAuMzI3bC0yNC40NiA0MC44OTNMOS41IDM3NS4yMTNsMTcuNjkzIDkuNjA1IDI2LjA2LTI4LjEwN3oiIGZpbGw9IiNjODAwMDAiIGZpbGwtb3BhY2l0eT0iLjc4NCIvPjxwYXRoIGQ9Ik05LjUwMiAzNzUuMjEzbDE5LjI5NCAyMi4zOSAyNC40Ni00MC44OTMtMjYuMDYgMjguMTA3eiIgZmlsbD0iI2ZmZiIvPjwvZz48L3N2Zz4="
    });
    $(".exampleone img").imgCheckbox({ limit: 2 });
    $(".exampletwo img").imgCheckbox({
        "styles": {
            "span.imgCheckbox.imgChked img": {
                "filter": "blur(5px)",
                "-webkit-filter": "blur(5px)",
                "transform": "scale(0.9)"
            }
        }
    });
    $(".exampleone").submit(function () {
        $("body").css({ "opacity": 0 }).animate({ "opacity": 1 }, "fast");
        $(".formoutput").text($(this).serialize());
        return false;
    })
    $(window).scroll(function () {
        if ($(this).scrollTop() > window.innerHeight - 1) {
            $('#headermenu').addClass("scrollDown");
        }
        else {
            $('#headermenu').removeClass("scrollDown");
        }
    });
})