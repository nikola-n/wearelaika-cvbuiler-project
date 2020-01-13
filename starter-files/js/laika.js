//tips
$('#imgLaika1').on('mouseover focus',function() {
    $('.explanation').hide();
    $('.tips').html(`Tip: Make sure you leave an email that you check regularly
    Link all your social media and portfolios you want companies and recruiters to be able to see (LinkedIn,
    Facebook, etc.) <br> <br>
    Be realistic when choosing the reason why you have a portfolio on Laika. This will help recruiters know
    whether you are suitable for the position on the long run.`);
    $('.tips').css('font-size','1.7em');
})
$('#imgLaika1').on('mouseout',function(){
    $('.tips').html('');
    $('.explanation').show();

})
$('#imgLaika2').on('mouseover focus',function() {
    $('.explanation').hide();
    $('.tips').html(`*You can only pick 1 industry out of the given 9 (Software Engineering, Design, Marketing and
        Communication, Data Science, IT and Sysadmin, Sales and Business Development, HR and Recruitment,
        Project and Product Management, Customer Support). <br> <br>
        *You can pick up to 5 options in the Expertise field. Make sure your choices are realistic and they truly
        reflect the skills you are most confident in.`);
    $('.tips').css('font-size','1.7em');
})
$('#imgLaika2').on('mouseout',function(){
    $('.tips').html('');
    $('.explanation').show();
})
$('#imgLaika3').on('mouseover focus',function() {
    $('.explanation').hide();
    $('.tips').html(`*Choose up to 8 technologies, but make sure you really know their ins and outs. The matching algorithm
    connects you to companies whose job openings have precise technologies listed. <br> <br>
    *Please be honest when selecting the level of your experience <br> <br>
    *Select your desired salary. Don’t try to be too accessible, but please be realistic – make sure you
    desired salary is in accordance to your experience.`);
    $('.tips').css('font-size','1.7em');
})
$('#imgLaika3').on('mouseout',function(){
    $('.tips').html('');
    $('.explanation').show();
})
$('#imgLaika4').on('mouseover focus',function() {
    $('.explanation').hide();
    $('.tips').html(`*You can choose multiple choices for your desired job plan <br> <br>
    *You can choose out of four locations, or multiple <br> <br>
    *You can choose between a job in office, remote, or both. <br> <br>
    *Let the companies know what is your current job title.`);  
    $('.tips').css('font-size','1.7em');
})
$('#imgLaika4').on('mouseout',function(){
    $('.tips').html('');
    $('.explanation').show();
})
$('#imgLaika5').on('mouseover focus',function() {
    $('.explanation').hide();
    $('.tips').html(`*Be honest about the motivation behind looking for a new opportunity. This will help us and the
    companies searching for new employees. <br> <br>
    Work experience is not mandatory, but it helps companies know what kind of experience and in which
    industry you have. <br> <br>
    Education is also not mandatory, but it adds weight to your portfolio if you have any academic
    knowledge.`);
    $('.tips').css('font-size','1.7em');
})
$('#imgLaika5').on('mouseout',function(){
    $('.tips').html('');
    $('.explanation').show();
})
