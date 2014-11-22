trado.admin =
{
    jsonErrors: function()
    {
        $(document).on("ajax:error", "form", function(evt, xhr, status, error)
        {
            var content, value, _i, _len, _ref;
            content = $(this).children('#errors');
            content.find('ul').empty();
            _ref = $.parseJSON(xhr.responseText).errors;
            // Append errors to list on page
            for (_i = 0, _len = _ref.length; _i < _len; _i++)
            {
                value = _ref[_i];
                content.show().find('ul').append('<li><i class="icon-cancel-circle"></i>' + value + '</li>');
            }
            // Scroll to error list
            if (!$(this).parent().hasClass('modal-content'))
            {
                $('body').scrollTo('.page-header', 800);
            }
            // Fade out loading animation
            $('.loading-overlay').css('height', '0').removeClass('active');
            $('.loading5').removeClass('active');
            // Reset attachment styles
            $('.new-file').css('background-color', '#00aff1').children('.icon-upload-3').css('top', '41px');
            return $('.new-file').children('div').empty();
      });
    }
}