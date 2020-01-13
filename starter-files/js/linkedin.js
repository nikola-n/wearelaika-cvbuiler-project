//tips

$('#img1').on('mouseover focus',function() {
    $('.explanation').hide();
    $('.tips').html(`Be concise and easy to understand. Don’t use overdone motivational quotes about work ethics and
    inspiration, try to make the ‘about’ section as personal and as reflective of you as possible.
    Use the new “Open for business” feature. State your area of expertise and industry, to let recruiters
    know they can reach you. <br> <br>
    Tip: Don’t write in things that you wouldn’t like to happen. For example, if you say you work good under
    pressure, employers might have an ace up their sleeve when stacking a lot of work with a short deadline,
    because you said so. Value your skills and free time accordingly.`);
    $('.tips').css('font-size','1.7em');
})
$('#img1').on('mouseout',function(){
    $('.tips').html('');
    $('.explanation').show();

})
$('#img2').on('mouseover focus',function() {
    $('.explanation').hide();
    $('.tips').html(`Explain every work experience you’ve had in detail – what were your obligations and tasks, what was
    your job title, which technologies and tools did you use etc. <br> <br>
    Don’t be shy on listing experience that isn’t connected to your current profession. Volunteering at a
    local community center, summer jobs, projects you were a part of, pro bono work you did to improve
    your skills and gain experience – everything counts. It serves as proof to your work ethics and
    adaptability.`);
    $('.tips').css('font-size','1.7em');
})
$('#img2').on('mouseout',function(){
    $('.tips').html('');
    $('.explanation').show();
})
$('#img3').on('mouseover focus',function() {
    $('.explanation').hide();
    $('.tips').html(`Tip:​ If you have no experience and education to build up your profile, do some pro bono. You can help
    someone, and at the same time enrich your portfolio. <br> <br>
    Under education, the formal and non-formal education relevant to your current title. For example, if you
    put Brainster Graphic Design Academy as an education, list all the modules and projects you have
    worked on. <br> <br>
    Tip: Add connections from the same field of work as you; even people you don’t know personally. That
    way, recruiters have a bigger chance of coming across your profile.`);
    $('.tips').css('font-size','1.7em');
})
$('#img3').on('mouseout',function(){
    $('.tips').html('');
    $('.explanation').show();
})
$('#img4').on('mouseover focus',function() {
    $('.explanation').hide();
    $('.tips').html(`Put in the skills you are most experienced in, so you can be endorsed from other people. <br> <br>
    Tip: Ask friends and coworkers to endorse you. <br> <br>
    List all your relevant accomplishments. Don’t say you have a black belt in karate, but mention an award
    from a design competition.`);
    $('.tips').css('font-size','1.7em');
})
$('#img4').on('mouseout',function(){
    $('.tips').html('');
    $('.explanation').show();
})
