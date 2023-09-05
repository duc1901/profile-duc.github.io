$(function(){
    const channels = [
        {name: "kplus-sport-1", link: "http://b4tv.live/b4tv/b4tv/76.m3u8"},
        {name: "kplus-sports", link: "http://b4tv.live/b4tv/b4tv/86.m3u8"},
        {name: "onfootball", link: "https://live2onsport.vtvcab.vn/dash/BONGDA_HD/m30_index.m3u8"},
        {name: "onsport", link: "https://live2onsport.vtvcab.vn/dash/THETHAO_HD/m40_index.m3u8"},
        {name: "tv360-1", link: "http://b4tv.live/b4tv/b4tv/3.m3u8"},
        {name: "tv360-2", link: "https://live-zlr1.tv360.vn/manifest/Su_Kien_4/playlist_1080p.m3u8"},
        {name: "tv360-3", link: "https://live-zlr1.tv360.vn/manifest/Su_Kien_3/playlist_1080p.m3u8"},
        {name: "tv360-4", link: "http://b4tv.live/b4tv/b4tv/48.m3u8"},
        {name: "onsportplus", link: "https://live2onsport.vtvcab.vn/dash/HAY_TV/m30_index.m3u8"},
        {name: "premiersport2", link: "https://cdn3.skygo.mn/live/disk1/SPSPlay/HLS-FTA/SPSPlay.m3u8"},
    ]

    eventClick();

    function eventClick() {
        $('.channel').click(function () {
            let id = $(this).attr('id');
            appendSource(id);
        })
    }

    function appendSource(name) {
        let channel = channels.find(item => item.name === name);
        let source = channel.link;
        let html = '<script id="video-source" type="text/javascript">' +
            'jwplayer("player").setup({"file": "'+ source +'"});' +
            '</script>';
        $('#video-source').remove();
        $('.player').after(html);
    }
});
