import React, { Component } from 'react'
import Masonry from 'masonry-layout'
import axios from 'axios'
export default class Pinterest extends Component {
    state = {
        data: [],
        butitleArrr: [
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

    componentDidMount() {
        axios.get('http://dasbabyinu.com/nft/')
            .then(res => {
                this.setState({
                    data: res.data
                }, () => {
                    this.advanceWidth()
                })
            })
    }

    advanceWidth = () => {
        var elem = document.querySelector('.pages_hoc')
        new Masonry(elem, {
            itemSelector: '.imgBox',
            columnWidth: '.imgBox',
            fitWidth: true,
            gutter: 20
        })
    }

    getNft = (index) => {
        this.state.butitleArrr[index] = '已领取'
        this.setState({
            butitleArrr: this.state.butitleArrr
        })
    }

    render() {
        const { data, butitleArrr } = this.state

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
                    <div className="pages_hoc">
                        {
                            data.map((item, index) => {
                                return (
                                    <div key={index} className='imgBox'>
                                        <img src={item.image} />
                                        <p className='nftNumber'>{item.name}</p>
                                        <button className='nftButton' onClick={() => this.getNft(index)}>{butitleArrr[index]}</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}