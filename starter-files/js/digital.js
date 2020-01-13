$(document).ready(function () {
    //save to pdf
    $("#pdfDownloader").click(function () {
        html2canvas(document.getElementById("digitalCV"), {
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
        $("i").hide();
        $("#myModal").remove();
        $(".modal-backdrop").remove();
        $(":button").hide();
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
        $(window).bind('beforeunload', function () {
            return 'Are you sure you want to leave?';
        });
        $('.explanation').animate({
            opacity: '0.5',
            height: '150px',
            width: '150px'
        })
        if (sessionStorage.length != 0) {
            $('#journalist').hide();
            $('#founder').hide();
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
        e.preventDefault();
        textAreaResize();
        inputTextStyle();
        //enable inputs
        $('input').attr("disabled", false);
        $('textarea').attr("disabled", false);
        //disable animations
        $('.explanation').hide();
        //image
        $('.dataImg').hide();
        $('form').show();

        //work exeperience buttons
        $('#founder').hide();
        $('#journalist').hide();
        var displayBtn = $('.displayBtn');
        $(displayBtn).css('display', 'block');
        var addBtn = $('#addMoreBtn');
        var jobWrapper = $('#newWorkExp');
        var x = 1;
        $(addBtn).click(function (e) {
            e.preventDefault();
            x++;
            $(jobWrapper).append(`
            <div id="job">
                <div class="col-md-1 line"></div>
                    <div class="col-md-11">
                        <input type="text"id="founder2" class="founder newFounder" placeholder="Add Tittle">
                        <input type="text" id="expl2" class="expl newExplanation" placeholder="Add Company">
                        <div style="display: flex; justify-content: space-between;">
                            <input type="text" id="date1" class="date newDate" placeholder="M-Y - M-Y">
                            <input type="text" id="town1"class="town newTown" style="margin-left:50%;" placeholder="Add place">
                        </div>
                        <input type="text" class="accompl" disabled placeholder="Add Accomplishments/Tasks">
                        <div style="display: flex;">
                        <li class="li-style"></li>
                        <textarea type="text" style='width:100%;height:auto;' class="wExp sameTextarea newTask" placeholder="Add new accomplishment/task"></textarea>
                    </div>
                <div class="wrapperInput"></div>
                <div style="margin-top: 2%; display:block;" class="addButtonDisplay">
                <i class="fa fa-plus addButton pull-right" style="color:#2fbdad;">Add Task</i>
                </div>
            </div>
            <button class="btn btn-danger  remove_field_job">Remove Job</button>
            </div>`);
            forNewInputs();
            inputTextStyle();
            textAreaResize();
            let removeJob = $('.remove_field_job');
            $(removeJob).click(function (e) {
                e.preventDefault();
                $('#job').remove();
                x--;
            })
            var inputWrapper = ('.wrapperInput');
            var displayInputAddBtn = ('.addButtonDisplay');
            $(displayInputAddBtn).css('display', 'block');
            var addInputBtn = $('.addButton');

            $(addInputBtn).click(function (e) {
                e.preventDefault();
                x++;
                $(inputWrapper).append(`
                <div style="display: flex;">
                    <li class="li-style"></li>
                    <textarea type="text" style='width:100%;height:auto;' class="wExp newNewTask sameTextarea" placeholder="Add new accomplishment/task"></textarea>
                    <i class="glyphicon glyphicon-remove remove_field" style="color:#2fbdad;"></i>
                </div>`);
                forNewInputs();
                inputTextStyle();
                textAreaResize();
                let removeBtn = $('.remove_field');
                $(removeBtn).on('click', function (e) {
                    e.preventDefault();
                    $(this).parent('div').children('').remove();
                    x--;
                })
            })
        })

        //education buttons
        var addEdu = $('#addEducation');
        var eduWrapper = $('#newEducation');
        var x = 1;
        $(addEdu).on('click', function (e) {
            e.preventDefault;
            x++;
            eduWrapper.append(`
            <div id="edu">
                <div class="col-md-1 line" style="margin-top:18%;"></div>
                <div class="col-md-11">
                <input type="text" class="founder" disabled placeholder="Education">
                <input type="text" class="expl newEducations" placeholder="Add Education">
                <div style="display: flex; justify-content: space-between;">
                    <input type="text" class="date eduDate" placeholder="M-Y - M-Y">
                    <input type="text" class="town eduTown" style="margin-left:50%;" placeholder="Place">
                </div>
                <input type="text" class="accompl" placeholder="Courses">
                <div class="wrapperCourse"></div>
                <div style="margin-top: 2%; display:block;" class="addCourseDisplay">
                <i class="fa fa-plus addCourse pull-right" style="color:#2fbdad; margin-bottom:3%;">Add Course</i>
                </div>
                </div>
                <button class="btn btn-danger remove_field_edu">Remove Education</button>
            </div>`);
            forNewInputs();
            inputTextStyle();
            textAreaResize();
            let removeEdu = $('.remove_field_edu');
            $(removeEdu).click(function (e) {
                e.preventDefault;
                $('#edu').remove();
                x--;
            })
            var courseWrapper = ('.wrapperCourse');
            var displayCourseAddBtn = ('.addCourseDisplay');
            $(displayCourseAddBtn).css('display', 'block');
            var addCourse = $('.addCourse');

            $(addCourse).click(function (e) {
                e.preventDefault();
                x++;
                $(courseWrapper).append(`
                <ul class="cirlce" margin:0; padding:0;>
                    <div style="display: flex;">
                    <li class="li-style"></li>
                    <textarea class='spanColor newCourse 'style="height:30px;">Add new course</textarea>
                    </div>
                        <i class="glyphicon glyphicon-remove remove_fieldE" style="color:#2fbdad;"></i>
                </ul>`);
                forNewInputs();
                inputTextStyle();
                textAreaResize();
                $('.border-1').css('height', 'auto');
                let removeFiled = $('.remove_fieldE');
                $(removeFiled).on('click', function (e) {
                    e.preventDefault;
                    ($(this).parent('ul').children('').remove());
                    x--;
                })
            })
        })
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
        //achievements buttons
        var achievement = $('#addAchievement');
        var displayBtn = $('.displayBtn');
        $(displayBtn).css('display', 'block');
        var achievementBtn = $('#addAchBtn');
        var x = 1;
        achievementBtn.on('click', function (e) {
            e.preventDefault;
            x++;
            achievement.append(`
            <div id="ach">
					<div class="col-md-12">
						<textarea type="text" class="sameTextarea newAchievement" name="cert1" placeholder="Add new achievement"></textarea>
					</div>
                <button class="btn btn-danger remove_field_ach">Remove Achievement</button>
                </div>`);
            forNewInputs();
            let removeFileAch = $('.remove_field_ach');
            $(removeFileAch).on('click', function (e) {
                e.preventDefault();
                $('#ach').remove();
                x--;
            })
            inputTextStyle();
            textAreaResize();
        })
        //language buttons
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
                <button class="btn btn-danger remove_field_lang">Remove Language</button>
                </div>`);
            forNewInputs();
            inputTextStyle();
            textAreaResize();
            let removeLang = $('.remove_field_lang');
            $(removeLang).on('click', function (e) {
                e.preventDefault();
                $('#langg').remove();
                x--;
            })

        })


        //the text you write to be the same style as the example
        function inputTextStyle() {
            $('.intro').removeClass('col-md-8');
            $('.intro').addClass('col-md-7');
            $('#name').css('border-bottom', '1.5px solid #2a343e');
            $('.founder').css('border-bottom', '1.5px solid #2a343e');
            $('.expl').css('border-bottom', '1.5px solid gray');
            $('#profession').css('border-bottom', '1.5px solid #53a5ac');
            $('.sameTextarea').css('border-bottom', '1px solid black');
            $('.email').css('border-bottom', '1.5px solid black');
            $('.phone').css('border-bottom', '1.5px solid black');
            $('.date').css('border-bottom', '1px solid #4fa3aa');
            $('.date').css('font-style', 'italic');
            $('.town').css('border-bottom', '1px solid #4fa3aa').css('font-style', 'italic');
            $('.accompl').css('border-bottom', '1px solid #4fa3aa').css('font-style', 'italic');
            $('.spanColor').css('border-bottom', '1px solid black');
        }
        //set sessions
        $('input').on('change', function () {
            $('#' + $(this).attr('id')).text($(this).val());
            $.session.set($(this).attr('id'), $(this).val());
        });
        $('textarea').on('change', function () {
            $('#' + $(this).attr('id')).text($(this).val());
            $.session.set($(this).attr('id'), $(this).val());
        });
        //setting and getting sessions for dinamically added inputs/textareas
        function forNewInputs() {
            //workexperience
            newFounder = $('.newFounder');
            newComp = $('.newExplanation');
            newDate = $('.newDate');
            newTown = $('.newTown');
            newTask = $('.newTask');
            anotherTask = $('.newNewTask');
            //education
            newEducations = $('.newEducations');
            eduDate = $('.eduDate');
            eduTown = $('.eduTown');
            newCourse = $('.newCourse');
            //achievements
            newAchievement = $('.newAchievement');
            //language
            addLang = $('.addLang');
            newFounder.each(function (i) {
                $(this).attr('id', "founder2" + i);
                i++;
                $.each(window.sessionStorage, function (index, value) {
                    $('#' + index).val(value).change();
                });
                $('input').on('change', function () {
                    $('#' + $(this).attr('id' + i)).text($(this).val());
                    $.session.set($(this).attr('id'), $(this).val());
                });
                $('textarea').on('change', function () {
                    $('#' + $(this).attr('id' + i)).text($(this).val());
                    $.session.set($(this).attr('id'), $(this).val());
                });

            });
            newComp.each(function (i) {
                $(this).attr('id', "expl2" + i);
                i++;

                $.each(window.sessionStorage, function (index, value) {
                    $('#' + index).val(value).change();
                });
                $('input').on('change', function () {
                    $('#' + $(this).attr('id' + i)).text($(this).val());
                    $.session.set($(this).attr('id'), $(this).val());
                });
                $('textarea').on('change', function () {
                    $('#' + $(this).attr('id' + i)).text($(this).val());
                    $.session.set($(this).attr('id'), $(this).val());
                });
            });
            newDate.each(function (i) {
                $(this).attr('id', "date1" + i);
                i++;

                $.each(window.sessionStorage, function (index, value) {
                    $('#' + index).val(value).change();
                });
                $('input').on('change', function () {
                    $('#' + $(this).attr('id' + i)).text($(this).val());
                    $.session.set($(this).attr('id'), $(this).val());
                });
                $('textarea').on('change', function () {
                    $('#' + $(this).attr('id' + i)).text($(this).val());
                    $.session.set($(this).attr('id'), $(this).val());
                });
            });
            newTown.each(function (i) {
                $(this).attr('id', "newDate" + i);
                i++;

                $.each(window.sessionStorage, function (index, value) {
                    $('#' + index).val(value).change();
                });
                $('input').on('change', function () {
                    $('#' + $(this).attr('id' + i)).text($(this).val());
                    $.session.set($(this).attr('id'), $(this).val());
                });
                $('textarea').on('change', function () {
                    $('#' + $(this).attr('id' + i)).text($(this).val());
                    $.session.set($(this).attr('id'), $(this).val());
                });
            });
            newTask.each(function (i) {
                $(this).attr('id', "task" + i);
                i++;

                $.each(window.sessionStorage, function (index, value) {
                    $('#' + index).val(value).change();
                });
                $('input').on('change', function () {
                    $('#' + $(this).attr('id' + i)).text($(this).val());
                    $.session.set($(this).attr('id'), $(this).val());
                });
                $('textarea').on('change', function () {
                    $('#' + $(this).attr('id' + i)).text($(this).val());
                    $.session.set($(this).attr('id'), $(this).val());
                });
            });
            anotherTask.each(function (i) {
                $(this).attr('id', "newTask1" + i);
                i++;

                $.each(window.sessionStorage, function (index, value) {
                    $('#' + index).val(value).change();
                });
                $('input').on('change', function () {
                    $('#' + $(this).attr('id' + i)).text($(this).val());
                    $.session.set($(this).attr('id'), $(this).val());
                });
                $('textarea').on('change', function () {
                    $('#' + $(this).attr('id' + i)).text($(this).val());
                    $.session.set($(this).attr('id'), $(this).val());
                });
            });
            newEducations.each(function (i) {
                $(this).attr('id', "newEduc" + i);
                i++;
                $.each(window.sessionStorage, function (index, value) {
                    $('#' + index).val(value).change();
                });
                $('input').on('change', function () {
                    $('#' + $(this).attr('id' + i)).text($(this).val());
                    $.session.set($(this).attr('id'), $(this).val());
                });
                $('textarea').on('change', function () {
                    $('#' + $(this).attr('id' + i)).text($(this).val());
                    $.session.set($(this).attr('id'), $(this).val());
                });
            });
            eduDate.each(function (i) {
                $(this).attr('id', "newEduDate" + i);
                i++;
                $.each(window.sessionStorage, function (index, value) {
                    $('#' + index).val(value).change();
                });
                $('input').on('change', function () {
                    $('#' + $(this).attr('id' + i)).text($(this).val());
                    $.session.set($(this).attr('id'), $(this).val());
                });
                $('textarea').on('change', function () {
                    $('#' + $(this).attr('id' + i)).text($(this).val());
                    $.session.set($(this).attr('id'), $(this).val());
                });
            });
            eduTown.each(function (i) {
                $(this).attr('id', "newEduTown" + i);
                i++;
                $.each(window.sessionStorage, function (index, value) {
                    $('#' + index).val(value).change();
                });
                $('input').on('change', function () {
                    $('#' + $(this).attr('id' + i)).text($(this).val());
                    $.session.set($(this).attr('id'), $(this).val());
                });
                $('textarea').on('change', function () {
                    $('#' + $(this).attr('id' + i)).text($(this).val());
                    $.session.set($(this).attr('id'), $(this).val());
                });
            });
            newCourse.each(function (i) {
                $(this).attr('id', "newEduCourse" + i);
                i++;
                $.each(window.sessionStorage, function (index, value) {
                    $('#' + index).val(value).change();
                });
                $('input').on('change', function () {
                    $('#' + $(this).attr('id' + i)).text($(this).val());
                    $.session.set($(this).attr('id'), $(this).val());
                });
                $('textarea').on('change', function () {
                    $('#' + $(this).attr('id' + i)).text($(this).val());
                    $.session.set($(this).attr('id'), $(this).val());
                });
            });
            addLang.each(function (i) {
                $(this).attr('id', "newLang" + i);
                i++;
                $.each(window.sessionStorage, function (index, value) {
                    $('#' + index).val(value).change();
                });
                $('input').on('change', function () {
                    $('#' + $(this).attr('id' + i)).text($(this).val());
                    $.session.set($(this).attr('id'), $(this).val());
                });
                $('textarea').on('change', function () {
                    $('#' + $(this).attr('id' + i)).text($(this).val());
                    $.session.set($(this).attr('id'), $(this).val());
                });
            });
            newAchievement.each(function (i) {
                $(this).attr('id', "newLang" + i);
                i++;
                $.each(window.sessionStorage, function (index, value) {
                    $('#' + index).val(value).change();
                });
                $('input').on('change', function () {
                    $('#' + $(this).attr('id' + i)).text($(this).val());
                    $.session.set($(this).attr('id'), $(this).val());
                });
                $('textarea').on('change', function () {
                    $('#' + $(this).attr('id' + i)).text($(this).val());
                    $.session.set($(this).attr('id'), $(this).val());
                });
            });
        }
    })

    //tips
    $('#photo').on('mouseover focus', function () {
        $('.explanation').hide();
        $('.tips').html(`Write your resume in the language that you would use at your workplace. This is a great chance to show
        the company’s representatives that you can express yourself. <br> <br>
        Put a photo that looks professional – made with a good camera and showing you in a warm light. It’s
        better to send a CV without a photo, than a photo that makes you seem unprofessional.`);
    })
    $('#photo').on('mouseout', function () {
        $('.tips').html('');
        $('.explanation').show();
    })
    $('.intro').on('mouseover focus', function () {
        $('.explanation').hide();
        $('.tips').html(`Know your unique value proposition and communicate it effectively.​ You need a personal tagline that
        will help you stand out from everyone else. This line should be the first impression the hiring manager
        will get from you. E.g. if you’re a Content Writer, don’t just say ‘’I’m a great content writer’’. Be creative
        and say why they should hire you to handle their content. <br> <br>
        Do your research​ in advance to create a value proposition relevant to the company you’re applying to.`);
    })
    $('#workExps').on('mouseover focus', function () {
        $('.explanation').hide();
        $('.tips').html(`List the ​ job experiences​ that are relevant to the position you’re applying for. If you’re currently working,
        your current job titles. Explain your responsibilities and projects and list the strategies and projects you
        created or worked on. <br> <br> Tailor your CV to the company and position you’re applying for. Highlight the keywords from the job
        specification on your CV. For example, if you’re applying for an e-commerce role, include keywords such
        as ‘’Conversion, bounce rate and Google Analytics’’. <br> <br>
        Talk about campaigns you worked on, the budget you had, how it benefited the company etc. This will
        help recruiters learn how you could benefit them based on your past experience.`);
    })
    $('#newWorkExp').on('mouseover focus', function () {
        $('.explanation').hide();
        $('.tips').html(`List the ​ job experiences​ that are relevant to the position you’re applying for. If you’re currently working,
        your current job titles. Explain your responsibilities and projects and list the strategies and projects you
        created or worked on. <br> <br> Tailor your CV to the company and position you’re applying for. Highlight the keywords from the job
        specification on your CV. For example, if you’re applying for an e-commerce role, include keywords such
        as ‘’Conversion, bounce rate and Google Analytics’’. <br> <br>
        Talk about campaigns you worked on, the budget you had, how it benefited the company etc. This will
        help recruiters learn how you could benefit them based on your past experience.`);
    })
    $('#founder').on('mouseover focus', function () {
        $('.explanation').hide();
        $('.tips').html(`List the ​ job experiences​ that are relevant to the position you’re applying for. If you’re currently working,
        your current job titles. Explain your responsibilities and projects and list the strategies and projects you
        created or worked on. <br> <br> Tailor your CV to the company and position you’re applying for. Highlight the keywords from the job
        specification on your CV. For example, if you’re applying for an e-commerce role, include keywords such
        as ‘’Conversion, bounce rate and Google Analytics’’. <br> <br>
        Talk about campaigns you worked on, the budget you had, how it benefited the company etc. This will
        help recruiters learn how you could benefit them based on your past experience.`);
    })
    $('#journalist').on('mouseover focus', function () {
        $('.explanation').hide();
        $('.tips').html(`List the ​ job experiences​ that are relevant to the position you’re applying for. If you’re currently working,
        your current job titles. Explain your responsibilities and projects and list the strategies and projects you
        created or worked on. <br> <br> Tailor your CV to the company and position you’re applying for. Highlight the keywords from the job
        specification on your CV. For example, if you’re applying for an e-commerce role, include keywords such
        as ‘’Conversion, bounce rate and Google Analytics’’. <br> <br>
        Talk about campaigns you worked on, the budget you had, how it benefited the company etc. This will
        help recruiters learn how you could benefit them based on your past experience.`);
        $('.tips').css('font-size', '1.6em');
    })
    $('#educationtips').on('mouseover focus', function () {
        $('.explanation').hide();
        $('.tips').html(`Under education, list only the ​ relevant studies and courses​ , like university degree or Digital Marketing
        Academy. Don’t write where you went to high school.`);
    })
    $('#newEducation').on('mouseover focus', function () {
        $('.explanation').hide();
        $('.tips').html(`Under education, list only the ​ relevant studies and courses​ , like university degree or Digital Marketing
        Academy. Don’t write where you went to high school.`);
    })
    $('#skillstips').on('mouseover focus', function () {
        $('.explanation').hide();
        $('.tips').html(`Analyze what your ​ key skills​ are. Make sure to list the skills you can shine in from day one.
        Showcase all the tools and technologies you know how to use​. Everything that’s useful to a marketer:
        from Typeform and Canva, to Photoshop and Data Studio. Link campaigns you worked on If possible.`);
    })
    $('#achievementtips').on('mouseover focus', function () {
        $('.explanation').hide();
        $('.tips').html(`Use numbers.​ If you helped a social media page gain a lot of followers, put the number in. If your
        campaign influenced a spike in sales, write in the percentage. Also, explain how you got there too. <br> <br>
        Tip: Highlight the key achievements you have presented on your CV so the hiring manager can catch
        them very quickly.`);
    })
    $('#addAchievement').on('mouseover focus', function () {
        $('.explanation').hide();
        $('.tips').html(`Use numbers.​ If you helped a social media page gain a lot of followers, put the number in. If your
        campaign influenced a spike in sales, write in the percentage. Also, explain how you got there too.
        Tip: Highlight the key achievements you have presented on your CV so the hiring manager can catch
        them very quickly.`);
    })
    $('.hr').on('mouseover focus', function () {
        $('.explanation').hide();
        $('.tips').html(`Email, phone number and date of birth are the practical part of the assembly of a CV. Enter your
        professional email address, preferably on Gmail. Your city of living is an information that interests your
        potential employers. Don’t leave your home address.`);
    })
    $('.langtips').on('mouseover focus', function () {
        $('.explanation').hide();
        $('.tips').html(`All languages, even those you don’t speak fluently, can help you get a certain position. It’s good to use
        expressions such as “fluent in”, “speaking level of”, “native language” and similar.`);
    })
    $('.addLanguage').on('mouseover focus', function () {
        $('.explanation').hide();
        $('.tips').html(`All languages, even those you don’t speak fluently, can help you get a certain position. It’s good to use
        expressions such as “fluent in”, “speaking level of”, “native language” and similar.`);
    })







})