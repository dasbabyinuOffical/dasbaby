import React, { Component } from 'react'
import Masonry from 'masonry-layout'  //实现瀑布流
import imagesloaded from 'imagesloaded' //监听图片加载
import Logo from "./images/dasbaby_600_600.png";
import InfiniteScroll from 'react-infinite-scroller' //下拉加载
import axios from 'axios'
import LazyLoad from 'react-lazyload';
import fire from "./images/fire.svg";
import fire2 from "./images/fire2.svg";
import fire3 from "./images/fire3.svg";
import fire4 from "./images/fire4.svg";
import fire5 from "./images/fire5.svg";

const arr = [
    fire,
    fire2,
    fire3,
    fire4,
    fire5,
    fire4,
    fire3,
    fire2,
    fire5,
    fire,
    fire2,
    fire4,
    fire4,
    fire4,
    fire4,
    fire4,
    fire3,
    fire2,
    fire5,
    fire,
    fire2,
    fire4,
    fire4,
    fire4,
    fire4,
    fire3,
    fire2,
    fire5,
    fire,
    fire2,
    fire4,
    fire4,
    fire4,
    fire4,
    fire3,
    fire2,
    fire5,
    fire,
    fire2,
    fire4,
    fire4,
    fire4,
]

export default class Pinterest extends Component {
    state = {
        data: arr,
        hasMore: true, // 是否开启下拉加载
        butitleArrr : [
            '领取',
            '领取',
            '领取',
            '领取',
            '领取',
            '领取',
            '领取',
            '领取',
            '领取',
            '领取',
        ]
        
    }

    componentWillUnmount() {
        // this.setState = () => {
        //   return
        // }
      }

    componentDidMount() {
        // this.loadMoreData()
        this.imagesOnload()
    }


    //图片懒加载
    imagesOnload = () => {
        const elLoad = imagesloaded('.pages_hoc')  //获取下拉加载里面的第一个盒子
        //always 图片已全部加载，或被确认加载失败
        elLoad.on('always', () => {
            // 调用瀑布流
            this.advanceWidth()
        })
    }

    //瀑布流
    advanceWidth = () => {
        var elem = document.querySelector('.pages_hoc');

        new Masonry(elem, {
            itemSelector: '.imgBox', //要布局的网格元素
            columnWidth: '.imgBox', //自适应
            fitWidth: true, // 设置网格容器宽度等于网格宽度
            gutter: 20,
        });
    }

    // 下拉加载
    loadMoreData = () => {
        // const { data } = this.state
        // axios.post('https://blogs.zdldove.top/Home/Apis/listWithPage')
        //   .then(res => {
        //     console.log(res)
        //     this.setState({
        //       data: [...data, ...arr] //拼接每次加载的数据 arr是我自定义的数据
        //     }, () => {
        //       this.imagesOnload() // 每次获取完数据 触发
        //     })
        //   })
    }

    getNft= (index) => {
        this.state.butitleArrr[index] = '已领取'
        this.setState({
            butitleArrr: this.state.butitleArrr
        })
    }

    render() {
        const { data, hasMore, butitle, butitleArrr} = this.state

        return (
            <div>
                <div>
                    <div className='owl-prev'>DasBaby NFT市场</div>
                    <form>
                        <button
                        className="owl-next btn btn--accent2 text--small text--medium btn-top-app"
                        formAction="https://metamask.io/buy-crypto/">
                            Connect Wallet
                        </button>
                    </form>
                </div>

                <div className='pages_pinterest'>
                    {/* 下拉加载 */}
                    <InfiniteScroll
                        initialLoad={false} // 不让它进入直接加载
                        // pageStart={1} // 设置初始化请求的页数
                        loadMore={this.loadMoreData}  // 监听的ajax请求
                        hasMore={hasMore} // 是否继续监听滚动事件 true 监听 | false 不再监听
                        useWindow={false} // 不监听 window 滚动条
                    >
                        
                        <div className="pages_hoc">
                            {
                                data.map((item, index) => {
                                    return (
                                        <div key={index} className='imgBox'>
                                            <LazyLoad resize height={208} src={Logo}> <img src={item} /></LazyLoad>
                                            {/* <img src={item} /> */}
                                            <p className='nftNumber'>DasBaby-#{index}</p>
                                            <button className='nftButton' onClick={() => this.getNft(index)}>{butitleArrr[index]}</button>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </InfiniteScroll>
                </div>
            </div>
        )
    }
}