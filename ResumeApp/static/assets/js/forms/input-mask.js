$(document).ready(function(){
    $("#date").inputmask("99/99/9999");
    $("#date2").inputmask("99-99-9999");
    $("#date3").inputmask("99 December, 9999");
    $("#hour").inputmask("99:99:99");
    $("#zipcode").inputmask("99999-999");
    $("#currency").inputmask({mask:"$999,9999,999.99"});
    $("#currency-2").inputmask({mask:"£999,9999,999.99"});
    $("#currency-3").inputmask({mask:"€999,9999,999.99"});
    $("#ip-add").inputmask({mask:"999.999.999.999"});
    $("#email").inputmask(
        {
            mask:"*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]",
            greedy:!1,onBeforePaste:function(m,a){return(m=m.toLowerCase()).replace("mailto:","")},
            definitions:{"*":
                {
                    validator:"[0-9A-Za-z!#$%&'*+/=?^_`{|}~-]",
                    cardinality:1,
                    casing:"lower"
                }
            }
        }
    );
    $("#ph-number").inputmask({mask:"(999) 999-9999"});
    $("#m-number").inputmask({mask:"99999-99999"});
    $("#max-value").inputmask({mask:"9999"});
});