// アコーディオンのタイトルがクリックされたら
$('.accordion-title').on('click', (e) => {

    // $('.accordion-title').removeClass('active');
    
    // 同じsection内の.accordion-contentを選択
    const content = $(e.target)
      .closest('.accordionContents')
      .find('.accordion-content');

    const title = $(e.target)
        .closest('.accordionContents')
        .find('.accordion-title');
    

    
    // .accordion-contentが非表示の場合は
    if (!content.is(':visible')) {
      // クリックされたコンテンツを表示
      content.slideDown();
      $(e.target).addClass('active');
    } else {
        content.slideUp();
        title.removeClass('active');
    }
});