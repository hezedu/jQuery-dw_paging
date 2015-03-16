(function($) {
    $.fn.extend({
        dw_paging: function(max, len, page) { //分页 --dw
            if (!max) {
                this.hide();
                return;
            }
            page = page || 'page=';
            var a = this.children(),
                left = a.eq(0),
                firstPage = a.eq(1),
                pre = a.eq(2),
                body = a.eq(3),
                next = a.eq(4),
                lastPage = a.eq(5),
                right = a.eq(6),
                ls = location.search,
                lsp = ls.split(page),
                lsp0 = lsp[0] || '?',
                lsp1 = lsp[1] || '1';
            if (lsp0 != '?' && lsp0[lsp0.length - 1] != '&') {
                lsp0 = lsp0 + '&'
            }
            index = lsp1.split('&')[0];
            lsp1 = lsp1.replace(index, '') || '';

            function href(index) {
                location = lsp0 + page + index + lsp1;
            }
            index = Number(index);
            //向左
            left.click(function() {
                if (index === 1) {
                    return;
                }
                href(index - 1);
            });
            //向右
            right.click(function() {
                if (index == max) return;
                href(index + 1);
            });
            //第一页
            firstPage.click(function() {
                href(1);
            });
            if (index === 1) {
                firstPage.addClass('dw_on');
                left.addClass('dw_disable');
            }
            //index == 1 && firstPage.addClass('dw_on');
            //最后一页
            lastPage.html(max);
            lastPage.click(function() {
                href(max);
            });
            if(index === max){
                lastPage.addClass('dw_on');
                right.addClass('dw_disable');
            }
            //index == max && lastPage.addClass('dw_on');
            if (max == 1) {
                lastPage.hide();
            }
            //中间
            var i = 2,
                len2 = len;
            if (max <= len) {
                pre.hide();
                next.hide();
                len2 = max;
            } else if (index < len) {
                pre.hide();
            } else if (max - index <= len) {
                len2 = max;
                i = max - len;
                next.hide();
            } else {
                var len_pre = Math.round(len / 2);
                i = index - len_pre;
                len2 = i + len;
            }
            var dump = '',
                cla = '';
            for (; i < len2; i = i + 1) {
                cla = '';
                if (index === i) cla = 'dw_on';
                dump += '<div class="dw_pading ' + cla + '">' + i + '</div>';
            }
            body.html(dump);
            var bc = body.children();
            bc.click(function() {
                href($(this).text());
            });
            //前省略
            pre.click(function() {
                var text = Number(bc.first().text());
                href(text - 1);
            });
            //后省略
            next.click(function() {
                var text = Number(bc.last().text());
                href(text + 1);
            });
        },
        //自动聚中
        dw_autoM: function() {
            var pwidth = this.parent().width(),
                width = this.width();
            this.css('margin-left', (pwidth - width) / 2);
            return this;
        }
    })
})(jQuery);