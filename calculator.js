
$(document).ready(function(){
    $('#answer').html(12800)   

var n = 10
var a = 4

   $('.input__svg, select').on('click',
   
        function (event){
          
            var target = $(event.target)
            console.log(target.closest('#plus'))
            if(target.closest('#plus').length > 0) {
                  
                  n += 1
            }
            else if(target.closest('#minus').length > 0) {
              
                n -= 1 
                if(n <= 10) {
                    n = 10
                }
                console.log(3)
            }
            $(".input__placeholder").html(n + 'м' + '<sup>2</sup>')
            // console.log(n)

            
            
            if(target.closest('#plus1').length > 0) {
                a += 1
            }
            
            if(target.closest('#minus1').length > 0) {
               a -= 1

                if(a <= 4) {
                    a = 4
                }
            }
            $("#sht").html(a + 'шт')
            var material = Number($('select[name="material"]').val())
            var color = Number($('select[name="color"]').val())
            var pricePerMetr

            if(material === 1 && color === 1) {
                    pricePerMetr = 2250
                }
            
            if(material === 2 && color === 1) {
                pricePerMetr = 1390
            }
            if(material === 2 && color === 2) {
                pricePerMetr = 1600
            }

            summ = n  * pricePerMetr + 100 * a

            if(material === 1 && color === 2) {
                    summ = "-"
            }
                console.log(n, a, material, color)
                $('#answer').html(summ)

        })

        $('#modal-close').on('click',
            function () {
                $(".modal").css("display", "none")
            }
        )

        $('#application').on('click', 
            function () {
                console.log(5)
                $(".modal").css("display", "block")
        }
        )
   
  
   

    // $('input, select').on('change',
        
    //     function() {
    //         var squer = Number($('#squer').val())
    //         var edge = Number($('#edge').val())
    //         var material = Number($('select[name="material"]').val())
    //         var color = Number($('select[name="color"]').val())

    //         var summ
    //         console.log(material)
    //         var pricePerMetr
    //         if(material === 1 && color === 1) {
    //             pricePerMetr = 2250
    //         }
        
    //         if(material === 2 && color === 1) {
    //             pricePerMetr = 1390
    //         }
    //         if(material === 2 && color === 2) {
    //             pricePerMetr = 1600
    //         }

    //         summ = squer  * pricePerMetr + 100 * edge

    //         if(material === 1 && color === 2) {
    //                 summ = "-"
    //         }
    //          console.log(summ)
    //          $('#answer').html('Итого: ' + summ + " руб.")
    //     }
    // )
})