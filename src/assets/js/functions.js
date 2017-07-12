$(document).ready(function () {
    new WOW().init();
    $.material.init();
    releaseStats();
    responsiveStats();
    smoothBtnScroll();
    cryptoPop();
    focusPocus();
});

function releaseStats() {
    $.getJSON("https://api.github.com/repos/DeloreanSubs/tokyodome/releases/latest").done(function (release) {
        var repo = release.assets[0];
        var downloadCount = 0;
        for (var i = 0; i < release.assets.length; i++) {
            downloadCount += release.assets[i].download_count;
        }

        var engDownloadCount = release.assets[0].download_count;
        var spaDownloadCount = release.assets[1].download_count;

        var engDownloadLink = release.assets[0].browser_download_url;
        var spaDownloadLink = release.assets[1].browser_download_url;
        var DownloadLink = release.assets[2].browser_download_url;

        var jsonDate = new Date(release.assets[0].updated_at);
        var releaseDate = jsonDate.getDate() + '/' + jsonDate.getMonth() + '/' + jsonDate.getFullYear();

        var totalDownloads = downloadCount.toLocaleString();
        var engDownloads = engDownloadCount.toLocaleString();
        var spaDownloads = spaDownloadCount.toLocaleString();


        $(".td-rn-download").attr("href", DownloadLink);
        $(".td-rn-download-spa").attr("href", spaDownloadLink);
        $(".td-rn-download-eng").attr("href", engDownloadLink);
        $(".release-eng").text(engDownloads);
        $(".release-spa").text(spaDownloads);
        $(".release-total").text(totalDownloads);
        $(".release-date").text(releaseDate);
    });
}

function responsiveStats() {

    var mySwiper = new Swiper('.swiper-container', {
        slidesPerView: 4,
        spaceBetween: 10,
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            640: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        }
    });
}

function smoothBtnScroll() {

    $("#redNight").click(function () {
        $('html, body').animate({
            scrollTop: $("#tokyo-dome-rednight").offset().top
        }, 2000);
    });

    $("#blackNight").click(function () {
        $('html, body').animate({
            scrollTop: $("#tokyo-dome-blacknight").offset().top
        }, 2000);
    });
}

function cryptoPop() {
    $('[rel="popover"]').popover({
        container: 'body',
        html: true,
        offset: '128px 0px',
        trigger: 'focus',
        placement: 'left',
        content: function () {
            var clone = $($(this).data('popover-content')).clone(true).removeClass('hide');
            return clone;
        }
    }).click(function (e) {
        e.preventDefault();
    });
}

function focusPocus() {
    document.addEventListener('scroll', function () {
        $(':focus').blur();
    }, true /*Capture event*/ );

    $('[rel="popover"]').on('shown.bs.popover', function () {
        $('.coffee').addClass('coffee-hover');
    });

    $('[rel="popover"]').on('hidden.bs.popover', function () {
        $('.coffee').removeClass('coffee-hover');
    });
}