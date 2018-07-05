import React from 'react';


function transTime(time) { 
    var duration = parseInt(time); 
    var minute = parseInt(duration/60); 
    var sec = duration%60+''; 
    var isM0 = ':'; 
    if(minute == 0){ 
        minute = '00'; 
    } else if(minute < 10 ){ 
        minute = '0'+minute; 
    }
    if(sec.length == 1) {
        sec = '0' + sec; 
    } 
    return minute+isM0+sec 
}
export default class Musicing extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isplay: void 0,
            start_time: '00:00',
            end_time: '00:00'
        }
    }
    componentDidMount() {
        const self = this;
        //获取歌曲的时长
        this.audios.addEventListener('loadedmetadata', function() {
            self.setState({
                end_time: transTime(this.duration)
            })
        });
        this.audios.addEventListener('timeupdate', function() {
            var value = Math.round((Math.floor(this.currentTime) / Math.floor(this.duration)) * 100, 0);
            self.refs.line.style.width = value * 0.907 + '%'
            self.setState({
                start_time: transTime(this.currentTime)
            })
        },false);
    }
    changePlay = () => {
        this.setState((preState) => {
            return {isplay: !preState.isplay}
        }, () => {
            this.state.isplay ? this.audios.play() : this.audios.pause()
        })
    }

    changeWidth = (e) => {
        const target = e.target;
        // const lingwdith = target.getBoundingClientRect().width *0.907;
        console.info(e.screenX, target.getBoundingClientRect().left, e, 777);
        // var rate = (e.offsetX - ($(this).width()-pgsWidth)/2)/pgsWidth;
        // audio.currentTime = audio.duration * rate;
        // updateProgress();
    }

    render() {
        const {isplay} = this.state;
        return (
            <div id="music_view">
                <div className={`sing_bg ${isplay === undefined ? '' : 'at'} ${isplay === false ? 'anruning' : ''}`}>
                    <div className="sing_img">
                        <img src={require('../static/images/3.jpg')} />
                    </div>
                </div>
                <div className="jidutiao">
                    <span className="start_time">{this.state.start_time}</span>
                    <div className="lines" onClick={this.changeWidth}>
                        <div className="muc_line"></div>
                        <div className="act_line" ref="line"></div>
                    </div>
                    <span className="end_time">{this.state.end_time}</span>
                </div>
                <div className="musci_action" onClick={this.changePlay}></div>
                <audio ref={(audio) => this.audios = audio } loop={true} src={require('../../src/static/gxr.mp3')}></audio >
            </div>
        )
    }
}