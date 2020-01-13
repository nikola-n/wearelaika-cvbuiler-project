$(document).ready(function () {
    //save to pdf

    $("#pdfDownloader").click(function () {
        html2canvas(document.getElementById("designCV"), {
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



    //get items

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
            $('.hideSkill').hide();
            $('#upwork').hide();
            $('#faculty').hide();
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
    //design cv functionality
    $('#edit').on('click', function () {

        $(window).bind('beforeunload', function () {
            return 'Are you sure you want to leave?';
        });

        textAreaResize();
        inputTextStyle();
        //enable inputs
        $('input').attr("disabled", false);
        $('textarea').attr("disabled", false);
        //disable animations
        $('.explanation').hide();
        //work exeperience buttons
        $('#upwork').hide();
        var displayBtn = $('.displayBtn');
        $(displayBtn).css('display', 'block');
        var addBtn = $('#addMoreBtn');
        var jobWrapper = $('#newWorkExp');
        var x = 1;
        $(addBtn).click(function (e) {
            e.preventDefault;
            x++;
            textAreaResize();
            inputTextStyle();
            $(jobWrapper).append(`<div class="col-md-11 col-md-offset-1" style="margin-top:4%;">
            <input type="text" class="founder newDate" placeholder="M/Y - M/Y">
            <input type="text" class="expl newLocation" placeholder="Add Company, Location">
            <input type="text" class="expl newProfession" placeholder="Add Profession">
            <textarea name="descr" class="expl newDescription" id="descr" style="height: 50px;" placeholder="Add Description"></textarea>
            <button class="btn remove_field_job"><i class="fas fa-trash"></i></button>
        </div>`);
            //dynamically added id's for session, set and get items
            var newDate = $('.newDate');
            newDate.each(function (i) {
                $(this).attr('id', "founder" + i);
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
                })
            });
            var newLocation = $('.newLocation');
            newLocation.each(function (i) {
                $(this).attr('id', "location" + i);
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
                })
            });
            var newProfession = $('.newProfession');
            newProfession.each(function (i) {
                $(this).attr('id', "prof" + i);
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
                })
            });
            var newDescription = $('.newDescription');
            newDescription.each(function (i) {
                $(this).attr('id', "descr" + i);
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
                })

            });
        });
        $(jobWrapper).on('click', '.remove_field_job', function (e) {
            e.preventDefault();
            $(this).parent('div').remove();
            x--;
        });
        //education buttons
        $('#faculty').hide();
        var displayBtn = $('.displayBtn');
        $(displayBtn).css('display', 'block');
        var addEdu = $('#addEducation');
        var eduWrapper = $('#newEducation');
        var x = 1;
        $(addEdu).on('click', function (e) {
            e.preventDefault();
            x++;
            textAreaResize();
            inputTextStyle();
            eduWrapper.append(`<div class="col-md-11 col-md-offset-1" style="margin-top:4%;">
            <input type="text" class="expl newEduDate" placeholder="M/Y - M/Y">
            <textarea type="text" class="expl newEducations" style="height:50px;" placeholder="Add Education"></textarea>
            <button class="btn remove_field_edu"><i class="fas fa-trash"></i></button>
            </div>`);
            var newEduDate = $('.newEduDate');
            newEduDate.each(function (i) {
                $(this).attr('id', 'eduDate' + i);
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
                })
            });
            var newEducations = $('.newEducations');
            newEducations.each(function (i) {
                $(this).attr('id', 'edu' + i);
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
                })
            })


            $(eduWrapper).on('click', '.remove_field_edu', function (e) {
                e.preventDefault();
                $(this).parent('div').remove();
                x--;
            });

        });
        //skills buttons
        $('.hideSkill').hide();
        var displayBtn = $('.displayBtn');
        $(displayBtn).css('display', 'block');
        var addSkill = $('#addSkill');
        var skillWrapper = $('#newSkill');
        var x = 1;
        $(addSkill).on('click', function (e) {
            e.preventDefault();
            textAreaResize();
            inputTextStyle();
            skillWrapper.append(`
            <div style="margin-left:13%">
            <input type="text" class="expl new" id="designerSkill" placeholder="Add Skill">
            <button class="btn remove_field_edu"><i class="fas fa-trash"></i></button>
            </div>`);
            //dynamically added id's for session set and get items
            var newVar = $('.new');
            newVar.each(function (i) {
                $(this).attr('id', "designerSkill" + i);
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
                })
            })

            $(skillWrapper).on('click', '.remove_field_edu', function (e) {
                e.preventDefault();
                $(this).parent('div').remove();
                x--;
            });

        })
        //the text you write to be the same style as the example
        function inputTextStyle() {
            $('.name').css('border-bottom', '1.5px solid #fff');
            $('.designer').css('height', 'auto');
            $('.founder').css('border-bottom', '1.5px solid #2a343e');
            $('.expl').css('border-bottom', '1.5px solid gray');
            $('.profession').css('border-bottom', '1.5px solid #fff').css('height', 'auto');
            $('#description').css('border-bottom', '1.5px solid gray').css('height', '130px');
            $('.btn-5').css('margin-top', '28%');
        }
        // //set items
        $('input').on('change', function () {
            $('#' + $(this).attr('id')).text($(this).val());
            $.session.set($(this).attr('id'), $(this).val());
        });
        $('textarea').on('change', function () {
            $('#' + $(this).attr('id')).text($(this).val());
            $.session.set($(this).attr('id'), $(this).val());
        })
    });
    //tips
    $('.designer').on('mouseover', function () {
        $('.explanation').hide();
        $('.tips').html('Write your resume in the language that you would use at your workplace. This is a great chance to show the company’s representatives that you can express yourself.');
    })
    $('.designer').on('mouseout', function () {
        $('.tips').html('');
    })
    $('#designer').on('focus', function () {
        $('.explanation').hide();
        $('.tips').html('Put a photo in a circle frame. It should be professional – made with a good camera and showing you in a warm light. It’s better to send a CV without a photo, than with one that makes you seem unprofessional.One CV isn’t suitable for every job position. Adapt your CV for the job position you’re applying for.');
    });
    $('#profession').on('focus', function () {
        $('.explanation').hide();
        $('.tips').html('One CV isn’t suitable for every job position. Adapt your CV for the job position you’re applying for.');
    })
    $('.professiontip').on('click', function () {
        $('.explanation').hide();
        $('.tips').html('One CV isn’t suitable for every job position. Adapt your CV for the job position you’re applying for.');
    })

    $('#descriptiontips').on('mouseover focus', function () {
        $('.explanation').hide();
        $('.tips').html('Write a short intro that truly represents you – not a cheesy quote, but something you truly believe in.');
    })
    $('#workExp').on('mouseover focus', function () {
        $('.explanation').hide();
        $('.tips').html('Describe every ​ job experience​ with a few words about your most relevant responsibilities and projects connected to the title you’re applying for.<br> Dates are a time frame in which you have been on a certain job title. If you are still working there, leave a hyphen ( - ). First write your most recent experience, and the oldest ones last. We want to enable the reader to see what he needs to about your experience right away.');
    })
    $('#contact').on('mouseover focus', function () {
        $('.explanation').hide();
        $('.tips').html('Email, phone number and date of birth are the practical part of the assembly of a CV. Enter your professional email address, preferably on Gmail. Your city of living is an information that interests you potential employers. Don’t leave your home address.<br>Leave a link to your LinkedIn profile, or Behance/Dribbble/WiX. Make sure it’s clickable, and shorten it.');
    })
    $('.justName').on('click', function () {
        $('.explanation').hide();
        $('.tips').html('Put a photo in a circle frame. It should be professional – made with a good camera and showing you in a warm light. It’s better to send a CV without a photo, than with one that makes you seem unprofessional.One CV isn’t suitable for every job position. Adapt your CV for the job position you’re applying for.');
    });
    $('#newWorkExp').on('mouseover focus', function () {
        $('.explanation').hide();
        $('.tips').html('Describe every ​ job experience​ with a few words about your most relevant responsibilities and projects connected to the title you’re applying for.<br> Dates are a time frame in which you have been on a certain job title. If you are still working there, leave a hyphen ( - ). First write your most recent experience, and the oldest ones last. We want to enable the reader to see what he needs to about your experience right away.');
    })
    $('#upwork').on('mouseover focus', function () {
        $('.explanation').hide();
        $('.tips').html('Describe every ​ job experience​ with a few words about your most relevant responsibilities and projects connected to the title you’re applying for.<br> Dates are a time frame in which you have been on a certain job title. If you are still working there, leave a hyphen ( - ). First write your most recent experience, and the oldest ones last. We want to enable the reader to see what he needs to about your experience right away.');
    })
    $('#educationtips').on('mouseover focus', function () {
        $('.explanation').hide();
        $('.tips').html('List relevant ​ education​ , including workshops or lectures you have visited. If you have a bachelor in Sports, and now you are applying as a designer because you finished a course, the course should be the highest in your “education” section. Don’t put in high and elementary school.');
    })
    $('#faculty').on('mouseover focus', function () {
        $('.explanation').hide();
        $('.tips').html('List relevant ​ education​ , including workshops or lectures you have visited. If you have a bachelor in Sports, and now you are applying as a designer because you finished a course, the course should be the highest in your “education” section. Don’t put in high and elementary school.');
    })
    $('#newEducation').on('click', function () {
        $('.explanation').hide();
        $('.tips').html('List relevant ​ education​ , including workshops or lectures you have visited. If you have a bachelor in Sports, and now you are applying as a designer because you finished a course, the course should be the highest in your “education” section. Don’t put in high and elementary school.');
    })
    $('#newSkill').on('mouseover focus', function () {
        $('.explanation').hide();
        $('.tips').html('List all the ​ skills, tools and technologies​ that you know well. <br> Advice:​ This builder is a great start to help you with the content of the CV, but try making it in Photoshop or Illustrator.');
    })
    $('#skilltips').on('mouseover focus', function () {
        $('.explanation').hide();
        $('.tips').html('List all the ​ skills, tools and technologies​ that you know well. <br><br> Advice:​ This builder is a great start to help you with the content of the CV, but try making it in Photoshop or Illustrator.');
    })





});