(function (factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        // AMD is used - Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(require('jquery'));
    } else {
        // Neither AMD nor CommonJS used. Use global variables.
        if (typeof jQuery === 'undefined') {
            throw 'bootstrap-datetimepicker requires jQuery to be loaded first';
        }
        factory(jQuery);
    }
}(function ($) {
    'use strict';
    var template = '    <div class="yinbao-input-container" style="display: none">\n' +
        '        <table border="0" cellpadding="0" cellspacing="0" width="100%">\n' +
        '            <tbody>\n' +
        '            <tr>\n' +
        '                <td width="100%">\n' +
        '                    <table class="yinbiao-input-table" border="0" cellpadding="0" cellspacing="0">\n' +
        '                        <tbody>\n' +
        '                        <tr>\n' +
        '                            <th rowspan="3">单元音<br>短元音</th>\n' +
        '                            <th>IPA63</th>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button">i</td>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button" colspan="2">ə</td>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button">ɔ</td>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button">u</td>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button" colspan="2">ʌ</td>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button">e</td>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button">æ</td>\n' +
        '                            <th></th>\n' +
        '                        </tr>\n' +
        '                        <tr>\n' +
        '                            <th>IPA88</th>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button">ɪ</td>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button" colspan="2">ə</td>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button">ɒ</td>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button">ʊ</td>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button" colspan="2">ʌ</td>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button">e</td>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button">æ</td>\n' +
        '                            <th></th>\n' +
        '                        </tr>\n' +
        '                        <tr>\n' +
        '                            <th>KK</th>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button">ɪ</td>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button">ə</td>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button">ɚ</td>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button">ɑ</td>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button">ʊ</td>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button" colspan="2">ʌ</td>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button">ɛ</td>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button">æ</td>\n' +
        '                            <th></th>\n' +
        '                        </tr>\n' +
        '                        <tr>\n' +
        '                            <th rowspan="3">单元音<br>长元音</th>\n' +
        '                            <th>IPA63</th>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button">iː</td>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button" colspan="2">əː</td>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button">ɔː</td>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button">uː</td>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button" colspan="2">ɑː</td>\n' +
        '                            <th></th>\n' +
        '                            <th></th>\n' +
        '                            <th></th>\n' +
        '                        </tr>\n' +
        '                        <tr>\n' +
        '                            <th>IPA88</th>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button">iː</td>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button" colspan="2">ɜː</td>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button">ɔː</td>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button">uː</td>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button" colspan="2">ɑː</td>\n' +
        '                            <th></th>\n' +
        '                            <th></th>\n' +
        '                            <th></th>\n' +
        '                        </tr>\n' +
        '                        <tr>\n' +
        '                            <th>KK</th>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button">i</td>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button" colspan="2">ɝ</td>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button">ɔ</td>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button">u</td>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button" colspan="2">ɑ</td>\n' +
        '                            <th></th>\n' +
        '                            <th></th>\n' +
        '                            <th></th>\n' +
        '                        </tr>\n' +
        '                        <tr>\n' +
        '                            <th rowspan="3">双元音</th>\n' +
        '                            <th>IPA63</th>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button">ei</td>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button" colspan="2">ai</td>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button">ɔi</td>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button">au</td>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button" colspan="2">əu</td>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button">iə</td>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button">ɛə</td>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button">uə</td>\n' +
        '                        </tr>\n' +
        '                        <tr>\n' +
        '                            <th>IPA88</th>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button">eɪ</td>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button" colspan="2">aɪ</td>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button">ɔɪ</td>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button">aʊ</td>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button">əʊ</td>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button">oʊ</td>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button">ɪə</td>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button">eə</td>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button">ʊə</td>\n' +
        '                        </tr>\n' +
        '                        <tr>\n' +
        '                            <th>KK</th>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button">e</td>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button" colspan="2">aɪ</td>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button">ɔɪ</td>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button">aʊ</td>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button" colspan="2">o</td>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button">ɪr</td>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button">ɛr</td>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button">ʊr</td>\n' +
        '                        </tr>\n' +
        '                        <tr>\n' +
        '                            <th rowspan="2">清浊成<br>对辅音</th>\n' +
        '                            <th>清辅音</th>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button">p</td>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button" colspan="2">t</td>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button">k</td>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button">f</td>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button" colspan="2">θ</td>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button">s</td>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button">ʃ</td>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button">tʃ</td>\n' +
        '                        </tr>\n' +
        '                        <tr>\n' +
        '                            <th>浊辅音</th>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button">b</td>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button" colspan="2">d</td>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button">ɡ</td>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button">v</td>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button" colspan="2">ð</td>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button">z</td>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button">ʒ</td>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button">dʒ</td>\n' +
        '                        </tr>\n' +
        '                        <tr>\n' +
        '                            <th colspan="2">其它辅音</th>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button">h</td>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button" colspan="2">m</td>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button">n</td>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button">ŋ</td>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button" colspan="2">l</td>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button">r</td>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button">j</td>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button">w</td>\n' +
        '                        </tr>\n' +
        '                        <tr>\n' +
        '                            <th colspan="2">其它符号</th>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button">ˈ</td>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button" colspan="2">ˌ</td>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button">[</td>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button">]</td>\n' +
        '                            <td class="yinbiao-button-choose yinbiao-button" colspan="2">/</td>\n' +
        '                            <td  class="yinbiao-button-clear yinbiao-button"  >清空</th>\n' +
        '                            <td  class="yinbiao-button-backspace yinbiao-button"  colspan="2">删除</th>\n' +
        '                        </tr>\n' +
        '                        </tbody>\n' +
        '                    </table>\n' +
        '                </td>\n' +
        '\n' +
        '            </tr>\n' +
        '            </tbody>\n' +
        '        </table>\n' +
        '    </div>';

    var YbModal = function (opts, clickcallback, deleteCallback, clearCallback) {
        this.options = opts;
        this.yinbiaoInstanse = null;
        this.yinbiaoInstanse = $(template)
        $('body').append(this.yinbiaoInstanse);
        this.yinbiaoInstanse.find('.yinbiao-button-choose').click(function (e) {
            var text = $(this).text()
            if (text) {
                clickcallback(text)
            }
        });
        this.yinbiaoInstanse.find('.yinbiao-button-backspace').click(function (e) {
            deleteCallback()
        });
        this.yinbiaoInstanse.find('.yinbiao-button-clear').click(function (e) {
            clearCallback()
        });
        this.yinbiaoInstanse.bind("contextmenu", function () {
            return false;
        });
        this.yinbiaoInstanse.bind("selectstart", function () {
            return false;
        });
        this.yinbiaoInstanse.click(function (e) {
            e.stopPropagation()
            return false;
        });

        this.show = function () {
            this.yinbiaoInstanse.css('display', 'block');
            this.yinbiaoInstanse.css('left', this.options.x || 0);
            this.yinbiaoInstanse.css('top', this.options.y || 0);
            this.yinbiaoInstanse.focus()
        };

        this.hide = function () {
            this.yinbiaoInstanse.css('display', 'none');
        };
    };

    $.fn.ybInput = function () {
        var inputDom =this;
        var isFocus = false;
        var pY = inputDom.position().top + inputDom.outerHeight();
        var pX = inputDom.position().left;

        var modal = new YbModal({x: pX, y: pY}, function (text) {
            var oldVal = inputDom.val();
            inputDom.val(oldVal + text);
        }, function () {
            var oldVal = inputDom.val();
            if (oldVal.length > 0) {
                inputDom.val(oldVal.substring(0, oldVal.length - 1))
            }
        }, function () {
            inputDom.val('');
        });


        $(document).on('click', ':not(.yinbao-input-container)', function () {
            if (isFocus) {

            } else {
                modal.hide();
            }
        });
        $(inputDom).focus(function (e) {
            modal.show();
            isFocus = true;
        });

        $(inputDom).blur(function (e) {
            isFocus = false;
        })
        return modal;
    };

    $.fn.ybInput.defaults = {};
    return $.fn.ybInput;
}));