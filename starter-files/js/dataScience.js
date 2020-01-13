$(document).ready(function () {
    //save to pdf
    $("#pdfDownloader").click(function () {
        html2canvas(document.getElementById("databCV"), {
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
        $("#app").css("border", "none")
        $(":button").hide();
        $("i").hide();
        $("#myModal").remove();
        $(".modal-backdrop").remove();
    });
    //get sessions
    $.each(window.sessionStorage, function (index, value) {
        $('#' + index).val(value).change();
    });
    //disable all inputs/textareas
    $('input').attr("disabled", true);
    $('input').attr('noselect');
    $('textarea').attr("disabled", true);
    //show where the tips will come up
    $(window).on('load', function () {
        $('.explanation').animate({
            opacity: '0.5',
            height: '150px',
            width: '150px'
        })
        if (sessionStorage.length != 0) {
            $('#dsIntern').hide();
        }
    });
    //regulate textarea height
    function textAreaResize() {
        $('textarea').on('input', function () {
            $(this)
                .height(50)
                .height(this.scrollHeight);
        });
    }
    textAreaResize();
    //digital marketing cv functionality
    $('#edit').on('click', function (e) {
        $(window).bind('beforeunload', function () {
            return 'Are you sure you want to leave?';
        });
        e.preventDefault();
        textAreaResize();
        inputTextStyle();
        //enable inputs
        $('input').attr("disabled", false);
        $('textarea').attr("disabled", false);
        //disable animations
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
        //image
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

        $('#dsIntern').hide();
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
                  <i class="fa fa-plus addButton pull-right" style="color:#384259;">Add Accomplishment</i>                                      
                  </div>
                  <button class="btn btn remove_field_accom"><i class="far fa-trash-alt"></i></button>
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
                        <i class="glyphicon glyphicon-remove remove_field" style="color:#384259;"></i>  
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
        //education
        var displayInputAddBtn = ('.addButtonDisplay');
        $(displayInputAddBtn).css('display', 'block');
        var achwrapper = $('#addNewAch');
        var addAchBtn = $('#addAchBtn');
        addAchBtn.on('click', function (e) {
            e.preventDefault();
            x++;
            achwrapper.append(`
                <div class="col-md-11 col-md-offset-1">
                        <input type="text" class="founder" id="eduData"placeholder="Add Field of Study">
						<input type="text" class="expl" id="eduPlace"placeholder="Add Institution">
						<div style="display: flex; justify-content: space-between;">
							<input type="text" class="date" id="eduDate" placeholder="M/Y - M/Y">
							<input type="text" class="town text-right" id="eduTown" placeholder="Add Town, Country">
                        </div>
                        <button class="btn remove_field" style="margin-top:2%;"><i class="fas fa-trash-alt"></i></button>
                 </div>`);

            $(achwrapper).on('click', '.remove_field', function (e) {
                e.preventDefault();
                $(this).parent('div').remove();
                x--;
            })
            inputTextStyle();
            textAreaResize();
            $('.border-1').css('height', 'auto');
        });

        //language 
        var language = $('#addLanguage');
        var displayBtn = $('.displayBtn');
        $(displayBtn).css('display', 'block');
        var langBtn = $('#addLangBtn');
        var x = 1;
        langBtn.on('click', function (e) {
            e.preventDefault();
            x++;
            language.append(`
                <div id="langg">
                    <div class="col-md-12">
                        <input type="text" class="sameTextarea addLang" name="cert1" id="lang2"placeholder="Add Language">
                        <input type="text" style="font-style: italic;" class="cert1"id="profi2" name="cert1" placeholder="Add Proficiency">
                    </div>
                    <button class="btn remove_field_lang"><i class="fas fa-trash-alt"></i></button>
                    </div>`);
            inputTextStyle();
            textAreaResize();
            let removeLang = $('.remove_field_lang');
            $(removeLang).on('click', function (e) {
                e.preventDefault();
                $('#langg').remove();
                x--;
            })

        })
        var max_fileds = 3;
        var informal = $('#addInformal');
        var displayBtn = $('.displayBtn');
        $(displayBtn).css('display', 'block');
        var informalBtn = $('#informalBtn');
        var x = 1;
        informalBtn.on('click', function (e) {
            if (max_fileds <= 3) {
                x++;
                e.preventDefault();
                x++;
                informal.append(`
                <div id="langg">
                    <div class="col-md-12">
                        <input type="text" class="sameTextarea edu1 addLang" name="cert1" id="lang2"placeholder="Add New">
                    </div>
                    <button class="btn remove_field_lang"><i class="fas fa-trash-alt"></i></button>
                    </div>`);
                inputTextStyle();
                textAreaResize();
                let removeLang = $('.remove_field_lang');
                $(removeLang).on('click', function (e) {
                    e.preventDefault();
                    $('#langg').remove();
                    x--;
                })
                $('.edu1').css('width', 'auto').css('margin-top', '5%').css('height', 'auto');
            }
        })
        //achievements buttons
        var achievement = $('#addAchievement');
        var displayBtn = $('.displayBtn');
        $(displayBtn).css('display', 'block');
        var achievementBtn = $('#addBt');
        var x = 1;
        achievementBtn.on('click', function (e) {
            e.preventDefault;
            x++;
            achievement.append(`
            <div id="ach">
					<div class="col-md-12">
						<textarea type="text" class="sameTextarea" name="cert1" placeholder="Add new certificate"></textarea>
					</div>
                <button class="btn remove_field_achI"><i class="fas fa-trash"></button></div>`);
            let removeFileAch = $('.remove_field_achI');
            $(removeFileAch).on('click', function (e) {
                e.preventDefault();
                $('#ach').remove();
                x--;
            })
            inputTextStyle();
            textAreaResize();
            $('#ach').css('height', 'auto');
        })

        //skills
        var dots = $('.dot');
        dots.addClass('EmptyDot', dots);
        var empty = $('.EmptyDot');
        empty.removeClass('dot', empty);

        $('.EmptyDot').on('click', function () {
            $(this).addClass('dot');
        })
        $('.lang').css('border-bottom', '1px solid gray').css('margin-right', 'auto');
        $('.lang').on('click', function () {
            this.contentEditable = true;
            this.focus();
            this.style.backgroundColor = '#E0E0E0';
            this.style.border = '1px dotted black';
        })
        var skillAdd = $('#skillAdd');
        var displayBtn = $('.displayBtn');
        $(displayBtn).css('display', 'block');
        var skillBtn = $('#skillBtn');
        var x = 1;
        skillBtn.on('click', function (e) {
            e.preventDefault;
            x++;
            skillAdd.append(`
            <div id="skill">
            <div class="python col-md-12">
            <span class="lang" style="margin-right:58%;">Add Skill</span> <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="EmptyDot"></span>
            <span class="EmptyDot"></span>
        </div>
                <button class="btn remove_field_skill"><i class="fas fa-trash"></button></div>`);
            let removeFileAch = $('.remove_field_skill');
            $(removeFileAch).on('click', function (e) {
                e.preventDefault();
                $('#skill').remove();
                x--;
            })
            inputTextStyle();
            textAreaResize();
            var dots = $('.dot');
            dots.addClass('EmptyDot', dots);
            var empty = $('.EmptyDot');
            empty.removeClass('dot', empty);

            $('.EmptyDot').on('click', function () {
                $(this).addClass('dot');
            })
            $('.lang').css('border-bottom', '1px solid gray').css('margin-right', 'auto');
            $('.lang').on('click', function () {
                this.contentEditable = true;
                this.focus();
                this.style.backgroundColor = '#E0E0E0';
                this.style.border = '1px dotted black';
            })
        })
    });

    $('input').on('change', function () {
        $('#' + $(this).attr('id')).text($(this).val());
        $.session.set($(this).attr('id'), $(this).val());
    });
    $('textarea').on('change', function () {
        $('#' + $(this).attr('id')).text($(this).val());
        $.session.set($(this).attr('id'), $(this).val());
    });

    function inputTextStyle() {
        $('.sameTextarea').css('border-bottom', '1px solid black');
        $('.date').css('border-bottom', '1.5px solid #384259');
        $('.date').css('font-style', 'italic');
        $('.town').css('border-bottom', '1.5px solid #384259');
        $('.town').css('font-style', 'italic');
        $('.accompl').css('font-style', 'italic');
        $('.founder').css('border-bottom', '1.5px solid #384259');
        $('.expl').css('border-bottom', '1.5px solid gray');
        $('#name').css('border-bottom', '1.5px solid #384259').css('width', '85%');
        $('.founder').css('border-bottom', '1.5px solid #384259');
        $('#profession').css('border-bottom', '1.5px solid #384259').css('width', '85%');
        $('#description').css('width', '85%');
        $('.sameTextarea').css('border-bottom', '1px solid black');
        $('.sameInputs').css('border-bottom', '1px solid #384259');
        $('.achievement1').css('border-bottom', '1px solid #384259');
        $('.comment').css('border-bottom', '1px solid #384259');
        $('.new').css('border-bottom', '1px solid #384259');
    }

    //tips
    $('#photo').on('mouseover focus', function () {
        $('.explanation').hide();
        $('.tips').html(`Write your resume in the language that you would use at your workplace. <br> <br>
        Put a photo made with a good camera. It’s better to send a CV without a photo, if you were planning on
        cropping yourself from a group photo from a dinner with friends, or a selfie in you room.`);
    })
    $('#photo').on('mouseout', function () {
        $('.tips').html('');
        $('.explanation').show();
    })
    $('#work').on('mouseover focus', function () {
        $('.explanation').hide();
        $('.tips').html(`Keep it brief <br> <br> <br>
        Write your previous ​ job experience,​ and if you’re currently working, your current job title. Explain your
        responsibilities and projects and list the tech stack and products/projects you worked on. If you were
        working in a team, let the recruiter know what your role was.`);
    })
    $('#newWorkExp').on('mouseover focus', function () {
        $('.explanation').hide();
        $('.tips').html(`Keep it brief <br> <br> <br>
        Write your previous ​ job experience,​ and if you’re currently working, your current job title. Explain your
        responsibilities and projects and list the tech stack and products/projects you worked on. If you were
        working in a team, let the recruiter know what your role was.`);
    })
    $('#dsIntern').on('mouseover focus', function () {
        $('.explanation').hide();
        $('.tips').html(`Keep it brief <br> <br> <br>
        Write your previous ​ job experience,​ and if you’re currently working, your current job title. Explain your
        responsibilities and projects and list the tech stack and products/projects you worked on. If you were
        working in a team, let the recruiter know what your role was.`);
    })
    $('#edutips').on('mouseover focus', function () {
        $('.explanation').hide();
        $('.tips').html(`Let the recruiter know about your ​ education​ , but only write the important parts – skip the high school
        and elementary, stick to the university degrees and courses relevant to the job you’re applying for. <br>
        Immediately should be your ​ Projects/Publications​ section. In the tech industry, the focus should be on
        what you have created. Include data analysis projects, machine learning projects, and if possible,
        published scientific articles or tutorials. <br> <br>
        Pick projects with relevance and connection to the job you’re applying for. They should demonstrate
        your technical skills and how they are applicable to solving real problems.`);
        $('.tips').css('font-size', '2.0em').css('height', 'auto');
    })

    $('#skillstips').on('mouseover focus', function () {
        $('.explanation').hide();
        $('.tips').html(`Be specific about the skills, tech and tools you used, and what your role was if you’re listing group
        projects. Specify coding languages, libraries etc. <br>
        Make sure you use keywords that will put the focus on your best skills. If an HR/recruiter just scans your
        CV, they will catch their attention. Highlight terms like “Python” or “Machine learning”. Space is limited,
        so don’t waste t on soft skills like leadership or communication. <br>
        It might require more work and research, but ​ customize your CV​ according to the position you are
        applying for. Add small details in some places in accordance to the job description.`);
        $('.tips').css('font-size', '2.0em');
    })
    $('#skillAdd').on('mouseover focus', function () {
        $('.explanation').hide();
        $('.tips').html(`Be specific about the skills, tech and tools you used, and what your role was if you’re listing group
        projects. Specify coding languages, libraries etc. <br>
        Make sure you use keywords that will put the focus on your best skills. If an HR/recruiter just scans your
        CV, they will catch their attention. Highlight terms like “Python” or “Machine learning”. Space is limited,
        so don’t waste t on soft skills like leadership or communication. <br>
        It might require more work and research, but ​ customize your CV​ according to the position you are
        applying for. Add small details in some places in accordance to the job description.`);
        $('.tips').css('font-size', '2.0em');
    })

    $('#certificatetips').on('mouseover focus', function () {
        $('.explanation').hide();
        $('.tips').html(`Tip: Speak in the third person, in bullet form. Don’t write long sentences, try to go straight to the point.
        Try to incorporate the answers to these questions: What did they commend me for? Which technologies
        and tools did I use? Did I implement a new idea?
        Order: Start with the skills and recent job positions. Languages and other qualifications should come
        after that. If you need space, leave out your personal interests, or at least use a smaller font for them.`);
    })

    $('#languagetips').on('mouseover focus', function () {
        $('.explanation').hide();
        $('.tips').html(`All languages, even those you don’t speak fluently, can help you get a certain position. It’s good to use
        expressions such as “fluent in”, “speaking level of”, “native language” and similar.`);
    })
    $('#addLanguage').on('mouseover focus', function () {
        $('.explanation').hide();
        $('.tips').html(`All languages, even those you don’t speak fluently, can help you get a certain position. It’s good to use
        expressions such as “fluent in”, “speaking level of”, “native language” and similar.`);
    })
    $('#informaltips').on('mouseover focus', function () {
        $('.explanation').hide();
        $('.tips').html(`Don’t be afraid to include a ​ “Informal education”​ where you can list all the courses, conferences,
        workshops and webinars that you used to teach yourself about digital marketing. Don’t include
        everything – just the education that is relevant and necessary for the position you are applying for.
        Tip: Use Action verbs to demonstrate your experience. Examples include: “applied”, “improved”,
        “implemented” etc.`);
    })

})