$(document).ready(function()
{
  $('.slide-room').slick({
    dots: true,
    slidesToScroll: 1,
    infinite: false,
    variableWidth: true
  });

    $('.slide-3').slick({
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        responsive: [       
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }]
      });   

      $('.slide-5').slick({
        dots: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: false,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }]
      });  

      $('.slide-4').slick({
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }]
      });
      
      $('.room-123').lightGallery({
        selector: '.light-link'
      });
  
      $('.open').click(function(event)
      {
        event.stopPropagation();
        $('.menu').addClass( "menu-open");
        $('.col-md-6').append('<div class="mask" ></div>');
      });

      $(".close-items, body").click(function(event)
      {
        $('.menu').removeClass('menu-open');
        $('.mask').remove(".mask");
      });

      $(".menu").click(function(event)
      {
        event.stopPropagation();
      });    

      console.log( );
      $(".songaydi").innerHTML = $("#Dateto").innerHTML;
});

/*-----Số Người---------*/
$('#SlotNumber').each(function(){
  var songuoi = 0;
  var max = parseInt(document.getElementById('maxperson').innerText);
  
  var Slot = new Vue ({
      el: '#SlotNumber',
      data() {
    return {
      NguoiLon: 0,
      TreEm: 0,
      TreSoSinh: 0,
      MaxNL: max,
      MaxTE: max,
    };
  },
    methods: {
      NguoiLonChange(value) {
        console.log();
       songuoi = parseInt(this.NguoiLon) + parseInt(this.TreEm);
       if(value==0)
      {
          this.TreEm = 0;
          this.TreSoSinh = 0;
          document.getElementById('slot').innerHTML = '0 người'; 
          if($('#slotroomdetail').length > 0)
          {
            document.getElementById('slotroomdetail').innerHTML = '0 người';
          }         
      }
      else
      {
        if($('#slotroomdetail').length > 0)
        {
          document.getElementById('slotroomdetail').innerHTML =  songuoi + ' người';
        }
          document.getElementById('slot').innerHTML = songuoi + ' người';  
          this.MaxNL = max - parseInt(this.TreEm);
          this.MaxTE = max - value;    
      }    
    },
      TreEmChange(value){
      songuoi = parseInt(this.NguoiLon) + parseInt(this.TreEm);
      if(value==0 & songuoi==0)
      {
          document.getElementById('slot').innerHTML = '0 người';
          if($('#slotroomdetail').length > 0)
          {
            document.getElementById('slotroomdetail').innerHTML = '0 người';
          }
      }
      else
      {
        
          if(value==1 & this.NguoiLon == 0)
          {
              this.NguoiLon = 1;                  
              document.getElementById('slot').innerHTML = '2 người';
              if($('#slotroomdetail').length > 0)
              {
                document.getElementById('slotroomdetail').innerHTML = '2 người';
              }
              this.MaxNL = max - value; 
              this.MaxTE = max -parseInt(this.NguoiLon);
          }
          else
          {
            songuoi = parseInt(this.NguoiLon) + parseInt(this.TreEm);          
              document.getElementById('slot').innerHTML = songuoi + ' người';
              if($('#slotroomdetail').length > 0)
              {
                document.getElementById('slotroomdetail').innerHTML =  songuoi + ' người';
              }
              this.MaxNL = max - value; 
              this.MaxTE = max -parseInt(this.NguoiLon);
          }
      }   
    },
    TreSoSinhChange(value){
         if(value==1 & this.NguoiLon == 0)
          {
              this.NguoiLon = 1;
              songuoi = parseInt(this.NguoiLon) + parseInt(this.TreEm);
              document.getElementById('slot').innerHTML = songuoi + ' người';
              if($('#slotroomdetail').length > 0)
              {
                document.getElementById('slotroomdetail').innerHTML =  songuoi + ' người';
              }
          }
          else
          {        
            songuoi = parseInt(this.NguoiLon) + parseInt(this.TreEm);          
              document.getElementById('slot').innerHTML = songuoi + ' người';
              if($('#slotroomdetail').length > 0)
              {
                document.getElementById('slotroomdetail').innerHTML =  songuoi + ' người';
              }
          }
    },
  },
  });
})

/*-----Ngày đi - Ngày về---------*/
$('.PickDate').each(function(){
  ELEMENT.locale(ELEMENT.lang.vi);
  var now = new Date();
  var yesterday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  var DatePicker = new Vue ({
    el: '.PickDate',
    data(){
      return {
        datePickerOptions: {
          disabledDate: (date) => {
            return date < yesterday;
        }
        },
        value1: '',
        value2: '',       
      };
    }
  });
})
   

$('.danhgia').each(function(){
  var sachse = parseInt( document.getElementById('sachse').innerHTML);
  var thoaimai = parseInt( document.getElementById('thoaimai').innerHTML);
  var doan = parseInt( document.getElementById('doan').innerHTML);
  var vitri = parseInt( document.getElementById('vitri').innerHTML);
  var dichvu = parseInt( document.getElementById('dichvu').innerHTML);
  
  var rate = new Vue({
    el: '.sachse',
    data(){
      return {
        value: sachse,
      }
    }
  });
  
  var rate = new Vue({
    el: '.thoaimai',
    data(){
      return {
        value: thoaimai,
      }
    }
  });
  
  var rate = new Vue({
    el: '.doan',
    data(){
      return {
        value: doan,
      }
    }
  });
  
  var rate = new Vue({
    el: '.vitri',
    data(){
      return {
        value: vitri,
      }
    }
  });
  
  var rate = new Vue({
    el: '.dichvu',
    data(){
      return {
        value: dichvu,
      }
    }
  });
})


/*-----Ngày đi - Ngày về--------- Roommm*/
$('.date').each(function(){
  var now = new Date();
    var yesterday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    ELEMENT.locale(ELEMENT.lang.vi);
    var Date1= new Vue ({
      el: '.date',
      data(){
        return {
          datePickerOptions: {
            disabledDate: (date) => {
              return date > yesterday;
          }
          },
          datePickerOptions2: {
            disabledDate: (date) => {
              return date > yesterday | date <= this.value1 ;
          }
          },
          value1: '',  
          value2: '', 
        };
      },
      methods: {
        datedenChange(value)
        {     
          if(this.value2 == '')
          {
            document.getElementById('Den').innerHTML = value.getDate() + "/" + value.getMonth() + "/" + value.getFullYear();
          } else
          {

            if(this.value1 >= this.value2) 
            {
              this.value1 = '';
              document.getElementById('Den').innerHTML = 'Ngày đi';
              document.getElementById('Dateto').innerHTML = '0';
            }
            else{
              document.getElementById('Den').innerHTML = value.getDate() + "/" + value.getMonth() + "/" + value.getFullYear();
              var songay = (this.value2 - this.value1)/86400000;  
              document.getElementById('Dateto').innerHTML = songay;                               
              $('.tinhtien').removeClass('d-none');             
              document.getElementById("songaydi").innerHTML = songay;

              var gia1dem = document.getElementById("gia1dem").innerHTML;
              
              var gia = gia1dem*songay;
              var giachuyen = gia.toLocaleString('vi-VN',{style: 'currency', currency: 'VND'});             
              document.getElementById("giathue").innerHTML = giachuyen;         

              var phidichvu = $('#phidichvu').text();            
              var tonggia = parseCurrency(giachuyen) + parseCurrency(phidichvu);

              document.getElementById("tonggia").innerHTML = tonggia.toLocaleString('vi-VN',{style: 'currency', currency: 'VND'});
            }
            
          }
        },
        dateveChange(value)
        {
          document.getElementById('Ve').innerHTML = value.getDate() + "/" + value.getMonth() + "/" + value.getFullYear();
          if(this.value1 != '')
          {
            var songay = (this.value2 - this.value1)/86400000;  
            document.getElementById('Dateto').innerHTML = songay;
            $('.tinhtien').removeClass('d-none');      
            document.getElementById("songaydi").innerHTML = songay;
            
             var gia1dem = document.getElementById("gia1dem").innerHTML;
              
              var gia = gia1dem*songay;
              var giachuyen = gia.toLocaleString('vi-VN',{style: 'currency', currency: 'VND'});             
              document.getElementById("giathue").innerHTML = giachuyen;         
                 
              var phidichvu = $('#phidichvu').text();            
              var tonggia = parseCurrency(giachuyen) + parseCurrency(phidichvu);

              document.getElementById("tonggia").innerHTML = tonggia.toLocaleString('vi-VN',{style: 'currency', currency: 'VND'});
          }
        }
    }
    });
})


      function initMap() {   
        var location = {lat: 10.791650, lng: 106.748413};
        
        var map = new google.maps.Map(
            document.getElementById('map'), {zoom: 14, center: location});
        var marker = new google.maps.Marker({position: location, map: map});
      }
    

$('.quocgia').each(function(){
  var quocgia = new Vue ({
    el: '.quocgia',
    data(){
      return{
        options: [{
          value: 'Việt nam',
          label: 'Việt nam'
        }, {
          value: 'Thái lan',
          label: 'Thái lan'
        }, {
          value: 'Lào',
          label: 'Lào'
        }, {
          value: 'Campuchia',
          label: 'Campuchia'
        }, {
          value: 'Mỹ',
          label: 'Mỹ'
        },
        {
          value: 'Hàn quốc',
          label: 'Hàn quốc'
        },
        {
          value: 'Malaysia',
          label: 'Malaysia'
        },
        {
          value: 'Trung quốc',
          label: 'Trung Quốc'
        },
      ],
        value:''
      };
    },
    methods: {
      QuocGiaChange(value) {
        console.log(value);
    }
  }
  });
})

$('*.money').each(function () { 
  var item = $(this).text(); 
  var num = parseInt(item).toLocaleString('vi-VN',{style: 'currency', currency: 'VND'});
  $(this).text(num);
});

function Currency(num){

}

function parseCurrency( num ) {
  return parseInt( num.replace(/[^a-z0-9\s]/gi, ''));
}

$('.napas').each(function(){
  var napas = new Vue ({
    el: '.napas',
    data(){
      return{
        options: [{
          value: 'ACB',
          label: 'ACB'
        }, {
          value: 'BacABank',
          label: 'BacABank'
        }, {
          value: 'MSB',
          label: 'MSB'
        }, {
          value: 'VPBank',
          label: 'VPBank'
        }, {
          value: 'HDBank',
          label: 'HDBank'
        },
        {
          value: 'Sacombank',
          label: 'Sacombank'
        },
        {
          value: 'Malaysia',
          label: 'Malaysia'
        },
        {
          value: 'BIDV',
          label: 'BIDV'
        },
      ],
        value:''
      };
    },
    methods: {
      QuocGiaChange(value) {
        console.log(value);
    }
  }
  });
})