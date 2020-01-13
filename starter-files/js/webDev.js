$(document).ready(function () {
   //save to pdf
   $("#pdfDownloader").click(function () {
      html2canvas(document.getElementById("webCV"), {
         onrendered: function (canvas) {
            var imgData = canvas.toDataURL('image/png');
            console.log('Report Image URL: ' + imgData);
            var doc = new jsPDF('p', 'mm', [400, 360]);
            doc.addImage(imgData, 'PNG', 10, 10);
            doc.save('sample.pdf');
         }
      });
      $("input").css("border", "none")
      $("textarea").css("border", "none")
      $("#app").css("border", "none");
      $(":button").hide();
      $("i").hide();
      $("#myModal").remove();
      $(".modal-backdrop").remove();


   });
   //get sessions
   $.each(window.sessionStorage, function (index, value) {
      $('#' + index).val(value).change();
   });

   $('input').attr("disabled", true);
   $('input').attr('noselect');
   $('textarea').attr("disabled", true);

   $(window).on('load', function () {
      $('.explanation').animate({
         opacity: '0.5',
         height: '150px',
         width: '150px'
      })
   });
   $('#edit').on('click', function () {
      $(window).bind('beforeunload', function () {
         return 'Are you sure you want to leave?';
      });
      $('.border-1').css('height', '1550px');
      $('input').attr("disabled", false);
      $('textarea').attr("disabled", false);
      $('.explanation').hide();
      function textAreaResize() {
         $('textarea').on('input', function () {
            $(this)
               .height(50)
               .height(this.scrollHeight);
         });
      }
      textAreaResize();
      inputTextStyle();

      $('.elon').hide();
      function readURL(input) {
         if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
               $('#blah').attr('src', e.target.result);
               $('#blah').attr('elon');
               $('.img').hide();
            }
            $('#blah').on('click', function () {
               $('.img').show();
            })
            reader.readAsDataURL(input.files[0]);
         }
      }
      $('#form1').show();

      $("#imgInp").change(function () {
         readURL(this);
      });

      $('#founder').hide();
      $('#CEO').hide();
      $('#COF').hide();
      $('#founderAndCEO').hide();
      //work exeperience
      var max_fileds = 5;
      var wrapper = $('#newWorkExp');
      var add_btn = $('#addMoreBtn');
      var displayBtn = $('.displayBtn');
      $(displayBtn).css('display', 'block');

      var x = 1;

      $(add_btn).on('click', function () {
         if (max_fileds < 6) {
            x++;
            $(wrapper).append(`
            <div id="workE"> 
               <div class="col-md-1 square-2" style="margin-top:8%"></div>
                  <div class="col-md-11">
                     <input type="text" class="founder" placeholder="Add Title">
                     <input type="text" class="expl" placeholder="Add Company">
                  <div style="display: flex; justify-content: space-between;">
                     <input type="text" class="date" placeholder="M/Y - M/Y">
                     <input type="text" class="town" style="margin-left:50%" placeholder="Add Town, Country">
                  </div>
                     <input type="text" class="accompl" disabled placeholder="Accomplishments">  
               <div class="addInput"></div>
                  <div style="margin-top: 2%; display:block;" class="addButtonDisplay">
                  <i class="fa fa-plus addButton pull-right" style="color:#2fbdad;">Add Accomplishment</i>                                      
                  </div>
                  <button class="btn btn remove_field_accom"><i class="fas fa-trash"></i></button>
            </div>`);
         };
         let removeJob = ('.remove_field_accom')
         $(removeJob).on('click', function (e) {
            e.preventDefault();
            $('#workE').remove();
            x--;
         });
         inputTextStyle();
         textAreaResize();

         var displayInputAddBtn = ('.addButtonDisplay');
         $(displayInputAddBtn).css('display', 'block');
         var addInputBtn = $('.addButton');
         var inputWrapper = $('.addInput');
         addInputBtn.on('click', function (e) {
            e.preventDefault();
            x++;
            inputWrapper.append(`
                    <div style="display: flex;">
                        <div class="square-1"></div>
                        <textarea type="text" style='width:100%;height:auto;' class="wExp sameTextarea" placeholder="Add Explanation to your activities."></textarea>
                        <i class="glyphicon glyphicon-remove remove_field" style="color:#2fbdad;"></i>  
                     </div>`);
            let removeBtn = $('.remove_field');
            $(removeBtn).on('click', function (e) {
               e.preventDefault();
               $(this).parent('div').children('').remove();
               x--;
            })
            textAreaResize();
            inputTextStyle();
         });
      });
      //skills
      $('.btn-style').css('display', 'none');
      $('.tag-container').show();
      skillsContainer = $("#skillsContainer");
      skillsContainer.css("display", "none");
      let tagContainer = $(".tag-container");
      tagContainer.css("display", "block");
      var $skillsInput = $("#skillsInput"),
         $appendHere = $(".tagHere"),
         oldKey = 0, newKey
      $skillsInput.keydown(function (e) {
         if (e.keyCode == 13) {
            if (e.preventDefault) {
               e.preventDefault();
               if ($(this).val() == '' || $(this).val() == ' ') {
                  return false;
               }
               addTag($(this));
            }
            return false;
         }
         if ($(this).val() == '' && e.keyCode === 8) {
            $(".tag:last-child").remove();
         }
      })
      function addTag(element) {
         var tag = $("<div />"), a = $("<a href='#' />"), span = $("<span />");
         tag.addClass('tag');
         $('<i class="fa fa-times" aria-hidden="true"></i>').appendTo(a);
         span.text($(element).val());
         a.bind('click', function () {
            $(this).parent().remove();
            $(this).unbind('click');
         });
         a.appendTo(tag);
         span.appendTo(tag);
         tag.appendTo($appendHere);
         $(element).val('');
      }
      //achievements
      $('.hideAch').hide();
      var displayInputAddBtn = ('.addButtonDisplay');
      $(displayInputAddBtn).css('display', 'block');
      var achwrapper = $('#addNewAch');
      var addAchBtn = $('#addAchBtn');
      x = 1;
      addAchBtn.on('click', function (e) {
         e.preventDefault();
         x++;
         achwrapper.append(`
                 <div class="col-md-12">
                 <input type="text" class="achievement1" name="achievement1" placeholder="Add achievement">
                 <textarea name="comment" class="comment" style="height: 60px;" placeholder="Add comment"></textarea>
                 <button class="btn remove_field"><i class="fas fa-trash"></i></button>
                 </div>`);

         $(achwrapper).on('click', '.remove_field', function (e) {
            e.preventDefault();
            $(this).parent('div').remove();
            x--;
         })
         inputTextStyle();
         textAreaResize();
      });
      //interests
      $('.hideInterest').hide();
      var interestsWrapper = ('#addInterests');
      var displayInputAddBtn = ('.addButtonDisplay');
      $(displayInputAddBtn).css('display', 'block');
      var intBnt = $('#addInterest');
      intBnt.on('click', function (e) {
         e.preventDefault();
         x++;
         $(interestsWrapper).append(`<div class="col-md-12">
         <input type="text" class="achievement1" style="border-bottom:1px solid gray"name="achievement1" placeholder="Add Interest">
         <button class="btn remove_field_int"><i class="fas fa-trash"></i></button>
         </div>`);
         $(interestsWrapper).on('click', '.remove_field_int', function (e) {
            e.preventDefault();
            $(this).parent('div').remove();
            x--;
         })
         inputTextStyle();
         textAreaResize();
      })
      //set sessions
      $('input').on('change', function () {
         $('#' + $(this).attr('id')).text($(this).val());
         $.session.set($(this).attr('id'), $(this).val());
      });
      $('textarea').on('change', function () {
         $('#' + $(this).attr('id')).text($(this).val());
         $.session.set($(this).attr('id'), $(this).val());
      });

   })

   function inputTextStyle() {
      $('.sameTextarea').css('border-bottom', '1px solid black');
      $('.date').css('border-bottom', '1.5px solid #00d2c3');
      $('.date').css('font-style', 'italic');
      $('.town').css('border-bottom', '1.5px solid #00d2c3');
      $('.town').css('font-style', 'italic');
      $('.accompl').css('font-style', 'italic');
      $('.founder').css('border-bottom', '1.5px solid #2a343e');
      $('.expl').css('border-bottom', '1.5px solid gray');
      $('#name').css('border-bottom', '1.5px solid #2a343e');
      $('.founder').css('border-bottom', '1.5px solid #2a343e');
      $('#profession').css('border-bottom', '1.5px solid #00d2c3');
      $('.sameTextarea').css('border-bottom', '1px solid black');
      $('.sameInputs').css('border-bottom', '1px solid #2a343e');
      $('.achievement1').css('border-bottom', '1px solid #2a343e');
      $('.comment').css('border-bottom', '1px solid #2a343e');
      $('.new').css('border-bottom', '1px solid #2a343e');
   }
   //tips
   $('#photo').on('mouseover focus', function () {
      $('.explanation').hide();
      $('.tips').html(`Write your resume in the language that you would use at your workplace. This is a great chance to show
      the company’s representatives that you can express yourself. <br> <br>
      Put a photo that looks professional – made with a good camera and showing you in a warm`);
   })
   $('#photo').on('mouseout', function () {
      $('.tips').html('');
      $('.explanation').show();
   })
   $('#elontips').on('mouseover focus', function () {
      $('.explanation').hide();
      $('.tips').html(`Know your unique value proposition and communicate it effectively.​ You need a personal tagline that
      will help you stand out from everyone else. This line should be the first impression the hiring manager
      will get from you. E.g. if you’re a Content Writer, don’t just say ‘’I’m a great content writer’’. Be creative
      and say why they should hire you to handle their content. <br>
      Do your research​ in advance to create a value proposition relevant to the company you’re applying to.`);
      $('.tips').css('font-size', '2.0em');
   })
   $('#emailtips').on('mouseover focus', function () {
      $('.explanation').hide();
      $('.tips').html(`Email, phone number and date of birth are the practical part of the assembly of a CV. Enter your
      professional email address, preferably on Gmail. Your city of living is an information that interests your
      potential employers. Don’t leave your home address.`);
   })
   $('#work').on('mouseover focus', function () {
      $('.explanation').hide();
      $('.tips').html(`List the ​ job experiences​ that are relevant to the position you’re applying for. If you’re currently working,
      your current job titles. Explain your responsibilities and projects and list the strategies and projects you
      created or worked on.`);
   })
   $('#founder').on('mouseover focus', function () {
      $('.explanation').hide();
      $('.tips').html(`Tailor your CV to the company and position you’re applying for. Highlight the keywords from the job
      specification on your CV. For example, if you’re applying for an e-commerce role, include keywords such
      as ‘’Conversion, bounce rate and Google Analytics'`);
   })

   $('#CEO').on('mouseover focus', function () {
      $('.explanation').hide();
      $('.tips').html(`Talk about campaigns you worked on, the budget you had, how it benefited the company etc. This will
      help recruiters learn how you could benefit them based on your past experience. <br> <br>
      Under education, list only the ​ relevant studies and courses​ , like university degree or Digital Marketing
      Academy. Don’t write where you went to high school.`);
   })
   $('#COF').on('mouseover focus', function () {
      $('.explanation').hide();
      $('.tips').html(`Talk about campaigns you worked on, the budget you had, how it benefited the company etc. This will
      help recruiters learn how you could benefit them based on your past experience. <br> <br>
      Under education, list only the ​ relevant studies and courses​ , like university degree or Digital Marketing
      Academy. Don’t write where you went to high school.`);

   })
   $('#skillstips').on('mouseover focus', function () {
      $('.explanation').hide();
      $('.tips').html(`Analyze what your ​ key skills​ are. Make sure to list the skills you can shine in from day one.
   Showcase all the tools and technologies you know how to use​ . Everything that’s useful to a marketer:
   from Typeform and Canva, to Photoshop and Data Studio. Link campaigns you worked on If possible.<br>
   Use numbers.​ If you helped a social media page gain a lot of followers, put the number in. If your
   campaign influenced a spike in sales, write in the percentage. Also, explain how you got there too.`);
   })

   $('#certificatetips').on('mouseover focus', function () {
      $('.explanation').hide();
      $('.tips').html(`Tip: Speak in the third person, in bullet form. Don’t write long sentences, try to go straight to the point.
      Try to incorporate the answers to these questions: What did they commend me for? Which technologies
      and tools did I use? Did I implement a new idea?
      Order: Start with the skills and recent job positions. Languages and other qualifications should come
      after that. If you need space, leave out your personal interests, or at least use a smaller font for them.`);
   })
   $('#founderAndCEO').on('mouseover focus', function () {
      $('.explanation').hide();
      $('.tips').html(`Tip: Speak in the third person, in bullet form. Don’t write long sentences, try to go straight to the point.
   Try to incorporate the answers to these questions: What did they commend me for? Which technologies
   and tools did I use? Did I implement a new idea?
   Order: Start with the skills and recent job positions. Languages and other qualifications should come
   after that. If you need space, leave out your personal interests, or at least use a smaller font for them.`);
   })

   $('#intereststips').on('mouseover focus', function () {
      $('.explanation').hide();
      $('.tips').html(`Don’t be afraid to include a “Self-Study” where you can list all the courses, conferences, workshops and
      webinars that you used to teach yourself about digital marketing. Don’t include everything – just the
      education that is relevant and necessary for the position you are applying for. <br>
      Tip: Use Action verbs to demonstrate your experience. Examples include: “applied”, “improved”,
      “implemented” etc.`);
      $('.tips').css('font-size', '2.0em');
   })
   $('#achievementstips').on('mouseover focus', function () {
      $('.explanation').hide();
      $('.tips').html(`Tip: Highlight the key achievements you have presented on your CV so the hiring manager can catch
      them very quickly.Dates – a time frame in which you have been on a certain job title. If you are still working there, leave a
      hyphen ( - ). Leave your most recent experience first, and the oldest ones last. Enable the reader to seewhat he needs to about your experience right away. Describe every job title with a few words about
      your most relevant experiences connected to the title you’re applying for.`);
   })

});
