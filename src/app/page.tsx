import React from 'react';

export default function ImageComponent() {
  return (
    <div className='bg-mywhite'>
      <div className='overflow-hidden'>
      {/*Start - HEADER*/}
      <div className='m-auto max-w-[1440px] bg-mywhite
                      max-mobile:max-w-[375px]'>
      <header className='h-[58px] flex flex-col pt-[45px] ml-[93px] justify-between
                         max-mobile:h-[106px] max-mobile:pt-[30px] max-mobile:ml-[28px]'>
        <div className='w-auto h-[58px] flex flex-row justify-between items-center
                        max-mobile:h-[46.41px]'>
          <div className='w-[555.52px] h-[53px] flex flex-row justify-between items-center
                          max-mobile:w-[141.46px]'>
            <div className='w-[53px] h-[53px] bg-logo
                            max-mobile:w-[46.41px] max-mobile:h-[46.41px]'></div>
            <div className='w-[80%] h-[27px] flex flex-row justify-between items-center
                            max-mobile:hidden'>
              <p className='uppercase font-[500] text-[17.83px] leading-[26.74px] text-[#606060]'>Discover</p>
              <p className='uppercase font-[500] text-[17.83px] leading-[26.74px] text-[#606060]'>Creators</p>
              <p className='uppercase font-[500] text-[17.83px] leading-[26.74px] text-[#606060]'>Sell</p>
              <p className='uppercase font-[500] text-[17.83px] leading-[26.74px] text-[#606060]'>Stats</p>
            </div>
            <p className='min-mobile:hidden
                          font-[600] text-[21.36px] leading-[27.77px]'>DiveSea</p>
          </div>
          <div className='w-[578px] h-[57.34px] flex flex-row justify-between items-center
                          max-mobile:w-auto h-[46.41px]'>
            <div className='w-[348.45px] h-[57px] bg-[#EDEDED] rounded-[14.88px] flex flex-row justify-between items-center
                            max-mobile:hidden'>
              <div className='w-[244.23px] h-[21.51px] flex flex-row justify-between items-center ml-[22.58px]'>
                <div className='w-[21.51px] h-[21.51px] bg-magnifier'></div>
                <p className='font-[500] text-[15.71px] leading-[18.46px] text-[#C2C3CB]'>Search Art Work / Creator</p>
              </div>
            </div>
            <button className='w-[199.52px] h-[57.34px] rounded-[16.17px] min-mobile:bg-bla
                               max-mobile:w-[31.5px] max-mobile:h-[22.33px] max-mobile:rounded-[0px] bg-lines_3'>
              <p className='uppercase text-whi font-[600] text-[16.17px] leading-[24.26px]
                            max-mobile:hidden'>Connect Wallet</p>
            </button>
          </div>
        </div>
        <div className='w-[314px] min-h-[0.5px] bg-[#CBCBCB]
                        min-mobile:hidden'></div>
      </header>
      </div>
      {/*End - HEADER*/}

      {/*Start - HERO*/}
      <div className='w-[100vw] flex items-center justify-center'>
        <div className='w-full max-w-[1440px]
                        max-mobile:max-w-[375px]'>
          <div className='flex flex-row pt-[99px] pl-[97px] justify-between
                          max-mobile:pt-[74px] max-mobile:pl-[30px] max-mobile:flex-col max-mobile:min-h-[740.4px]'>
            {/*Start - 1 Secondary Block*/}
            <div className='max-w-[502px] h-[519.92px] flex flex-col justify-between
                            max-mobile:max-w-[315.36px] max-mobile:h-[310.61px]'>
              {/*Start - Line with Text and Heading with Description*/}
              <div className='flex flex-col justify-between
                              max-mobile:w-auto max-mobile:h-auto'>
                <div className='flex flex-col'>
                  {/*Start - Line with Text*/}
                  <div className='max-mobile:h-[11px] max-mobile:flex max-mobile:flex-row max-mobile:justify-center max-mobile:items-center
                                  min-mobile:w-auto max-mobile:h-auto'>
                    <div className='bg-[#201F1F]/20 w-[195px] h-[1px]
                                    max-mobile:bg-[#8D8C8C] max-mobile:w-[33.29px] max-mobile:h-[0.62px]'>
                    </div>
                    <p className='min-mobile:hidden uppercase font-[600] text-[9.25px] leading-[11.1px] ml-[12.33px] tracking-[1.23px] text-[#8D8C8C]'>Over 1M Creators</p>
                  </div>
                  {/*End - Line with Text*/}
                  {/*Start - Heading with Description*/}
                  <div className='min-h-[252px] flex flex-col justify-between
                                  max-mobile:min-h-[159.87px]'>
                    <p className='text-bla text-[75px] font-[600] leading-[90px] tracking-[-3px]
                                  max-mobile:text-[47.4px] max-mobile:font-[600] max-mobile:leading-[56.88px] max-mobile:tracking-[-1.9px] max-mobile:text-center'>Discover And Create NFTs</p>
                    <div className='flex flex-col'>
                      <p className='text-[#676767] text-[18px] font-[400] leading-[28px]
                                  max-mobile:text-[11.38px] max-mobile:leading-[17.7px] max-mobile:text-center'>Discover, Create and Sell NFTs On Our NFT Marketplace</p>
                      <p className='text-[#676767] text-[18px] font-[400] leading-[28px]
                                  max-mobile:text-[11.38px] max-mobile:leading-[17.7px] max-mobile:text-center'> With Over Thousands Of NFTs And Get a <span className='text-bla font-[600] text-justify
                                  max-mobile:text-center'>$20 bonus</span>.</p>
                    </div>
                  </div>
                </div>
                {/*End - Heading with Description*/}
              </div>
              {/*End - Line with Text and Heading with Description*/}
              {/*Start - Two Buttons with Reviews*/}
              <div className='h-[212.92px] flex flex-col justify-between
                              max-mobile:h-[91.61px] max-mobile:items-center'>
                {/*Start - Two Buttons*/}
                <div className='max-w-[340px] flex flex-row justify-between
                                max-mobile:w-[244px] '>
                    <button className='bg-[#000000] w-[179px] h-[60px] rounded-[12.41px] flex justify-center items-center
                                       max-mobile:w-[128px] max-mobile:h-[47px] max-mobile:rounded-[8.89px]'>
                      <p className='uppercase text-[#FFFFFF] text-[16.27px] leading-[24.41px] tracking-[1%] font-[500]
                                    max-mobile:text-[11.66px] max-mobile:leading-[17.49px]'>Explore More</p>
                    </button>
                    <button className='w-[138px] h-[60px] rounded-[12.41px] border-[1.5px] border-[#000000] flex justify-center items-center
                                       max-mobile:w-[99px] max-mobile:h-[47px] max-mobile:rounded-[8.89px] max-mobile:border-[1.07px]'>
                      <p className='uppercase font-[500] text-[16.27px] text-[#000000] leading-[24.41px] tracking-[1%]
                                    max-mobile:text-[11.66px] max-mobile:leading-[17.49px]'>create NFT</p>
                    </button>
                </div>
                {/*End - Two Buttons*/}
                {/*Start - Reviews*/}
                <div className='flex flex-col justify-end'>
                <div className='flex flex-row justify-between'>
                  <div className='max-h-[70.92px] flex flex-col justify-between
                                  max-mobile:max-h-[24.18px]'>
                    <p className='font-[600] text-[36.77px] leading-[45.96px] text-bla
                                  max-mobile:hidden'>430K+</p>
                    <p className='font-[500] text-[12.26px] leading-[18.39px] text-[#848586]
                                  max-mobile:hidden'>Art Works</p>
                    <div className='min-mobile:hidden w-[98.48px] h-[24.18px] bg-reviews_1'></div>
                  </div>
                  <div className='max-h-[70.92px] flex flex-col justify-between
                                  max-mobile:max-h-[12.24px] max-mobile:ml-[16.01px] max-mobile:mt-[8.81px]'>
                    <p className='font-[600] text-[36.77px] leading-[45.96px] text-bla
                                  max-mobile:hidden'>159K+</p>
                    <p className='font-[500] text-[12.26px] leading-[18.39px] text-[#848586]
                                  max-mobile:hidden'>Creator</p>
                    <div className='min-mobile:hidden w-[76.69px] h-[12.24px] bg-reviews_2'></div>
                  </div>
                  <div className='max-h-[70.92px] flex flex-col justify-between
                                  max-mobile:w-[43px] max-mobile:h-[20px] max-mobile:ml-[7.38px] max-mobile:mt-[5.6px]'>
                    <p className='font-[600] text-[36.77px] leading-[45.96px] text-bla
                                  max-mobile:hidden'>87K+</p>
                    <p className='font-[500] text-[12.26px] leading-[18.39px] text-[#848586]
                                  max-mobile:hidden'>Collections</p>
                    <p className='min-mobile:hidden font-[500] text-[12.81px] leading-[19.22px] text-[#6E7886]/70 text-center'>4900+</p>
                  </div>
                </div>
                </div>
                {/*End - Reviews*/}
              </div>
              {/*End - Two Buttons with Reviews*/}
            </div>

            {/*End - 1 Secondary Block*/}
            {/*Start - 2 Secondary Block*/}
            <div className='w-[780px] h-[553.99px] flex flex-row justify-between mr-[-30px]
                            max-mobile:w-[400px] max-mobile:h-[295.4px]'>
              {/*Start - Image 1 and Arrows*/}
              <div className='flex flex-col items-center justify-between'>
                {/*Start - Image 1*/}
                <div className='flex flex-col mt-[19px] max-mobile:mt-[10.13px]'>
                  <div className='w-[391px] h-[418.5px] relative
                                  max-mobile:w-[208.49px] max-mobile:h-[223.16px]'>
                    <div className='w-[391px] h-[394.59px] top-[23.91px] rounded-[11.96px] bg-image_1_op absolute
                                    max-mobile:w-[208.49px] max-mobile:h-[210.4px] max-mobile:top-[12.75px] max-mobile:rounded-[6.38px]'></div>
                    <div className='w-[391px] h-[394.59px] rounded-[25px] bg-image_1 absolute
                                    max-mobile:w-[208.49px] max-mobile:h-[210.4px] max-mobile:rounded-[13.33px]'></div>
                  </div>
                </div>
                {/*End - Image 1*/}
                {/*Start - Arrows*/}
                <div className='bg-[#FCFCFD] w-[166px] h-[68.99px] mt-[47.5px] rounded-[17.25px] p-[21.56px] gap-[10.78px] flex justify-center items-center shadow-[0_43.12px_34.49px_-25.87px_rgba(15,15,15,0.12)]
                                max-mobile:w-[88.51px] max-mobile:h-[36.79px] max-mobile:mt-[0px] max-mobile:rounded-[9.2px] max-mobile:p-[11.5px] max-mobile:gap-[5.75px] max-mobile:shadow-[0_22.99px_18.39px_-13.79px_rgba(15,15,15,0.12)]'>
                  <div className='w-[122.88px] h-[25.87px] gap-[34.49px] flex flex-row
                                  max-mobile:w-[65.52px] max-mobile:h-[13.79px] max-mobile:gap-[18.39px]'>
                    <button className='w-[25.87px] h-[25.87px]
                                    max-mobile:w-[13.79px] max-mobile:h-[13.79px]'>
                      <div className='w-[15.09px] h-[9.7px] mt-[7.55px] ml-[5.39px] bg-left_arrow_1
                                      max-mobile:w-[8.05px] max-mobile:h-[5.17px] max-mobile:mt-[4.02px] max-mobile:ml-[2.87px]'></div>
                    </button>
                    <div className='bg-[#E6E8EC] w-[2.16px] h-[25.87px] rounded-[2.16px]
                                    max-mobile:w-[1.15px] max-mobile:h-[13.79px] max-mobile:rounded-[1.15px]'></div>
                    <button className='w-[25.87px] h-[25.87px]
                                    max-mobile:w-[13.79px] max-mobile:h-[13.79px]'>
                      <div className='w-[15.09px] h-[9.7px] mt-[7.55px] ml-[5.39px] bg-right_arrow_1
                                      max-mobile:w-[8.05px] max-mobile:h-[5.17px] max-mobile:mt-[4.02px] max-mobile:ml-[2.87px]'></div>
                    </button>
                  </div>
                </div>
                {/*End - Arrows*/}
              </div>
              {/*End - Image 1 and Arrows*/}
              {/*Start - Image 2 and Twisted Arrow*/}
              <div className='w-[364.81px] h-[543px] relative
                              max-mobile:w-[193.78px] max-mobile:h-[289.54px]'>
                <div className='w-[128.78px] h-[124.22px] bg-twisted_arrow rotate-[3.08deg] absolute left-[22px] top-[60px]
                                max-mobile:w-[58.79px] max-mobile:h-[56.71px] max-mobile:left-[9.73px] max-mobile:top-[45.51px]'></div>
                <div className='w-[173px] h-[399.65px] bg-points absolute left-[216px]
                                max-mobile:w-[92.25px] max-mobile:h-[213.1px] max-mobile:left-[75px]'></div>
                <div className='w-[320.48px] h-[343px] absolute left-[38.67px] top-[200px] relative flex felx-col justify-center
                                max-mobile:w-[170.89px] max-mobile:h-[182.89px] max-mobile:left-[20.62px] max-mobile:top-[106.65px]'>
                  <div className='w-[315.37px] h-[318.26px] top-[24.74px] rounded-[11.96px] bg-image_2_op absolute
                                  max-mobile:w-[168.16px] max-mobile:h-[169.7px] max-mobile:top-[13.19px] max-mobile:rounded-[5.14px]'></div>
                  <div className='w-[319.16px] h-[322.08px] rounded-[22.35px] bg-image_2 absolute
                                  max-mobile:w-[170.18px] max-mobile:h-[171.74px] max-mobile:rounded-[11.92px]'></div>
                </div>
              </div>
              {/*End - Image 2 and Twisted Arrow*/}
            </div>
            {/*End - 2 Secondary Block*/}
          </div>
        </div>
      </div>
      {/*End - HERO*/}

      {/*Start - WEEKLY*/}
      <div className='mt-[143.01px] relative
                      max-mobile:mt-[113.6px]'>
        <div className='h-[873px] flex flex-col items-center bg-[#F1F1F1]
                        max-mobile:h-[589px]'>
          {/*Start - Main Text*/}
          <p className='pt-[70px] font-[600] text-[45px] leading-[26.92px] text-[#C5C5C5]
                        max-mobile:pt-[57px] max-mobile:text-[30px]'>Weekly - Top NFT</p>
          {/*End - Main Text*/}
          {/*Start - Cards*/}
          <div className='w-[1565] h-[402.28px] mt-[100px] flex flex-row justify-around
                          max-mobile:w-[1105px] max-mobile:h-[284.04px] max-mobile:mt-[63px]'>
            {/*Start - First Card*/}
            <div className='w-[281.13px] h-[402.28px] pt-[14.11px] bg-whi rounded-[23.48px] shadow-[38.82px_11.76px_58.81px_0_rgba(199,199,199,0.6)]
                                max-mobile:w-[198.49px] max-mobile:h-[284.04px] max-mobile:pt-[9.97px] max-mobile:rounded-[16.61px] max-mobile:shadow-[12.51px_8.31px_41.53px_0_rgba(199,199,199,0.6)]'>
                  <div className='w-[252.9px] h-[252.9px] ml-[14.12px] pt-[14.12px] rounded-[23.48px] bg-weekly_card_1
                                  max-mobile:w-[178.56px] max-mobile:h-[178.56px] max-mobile:ml-[9.97px] max-mobile:pt-[9.96px] max-mobile:rounded-[16.58px]'>
                    <div className='bg-[#1C1D20]/35 w-[116.58px] h-[37.64px] ml-[127.04px] rounded-[9.41px] border-[1.18px] border-[#1C1D20]/8 blur-[4.71] shadow-[0_4.71px_14.12px_0_rgba(28, 29, 32, 0.08)] flex justify-center items-center
                                    max-mobile:w-[80.99px] max-mobile:h-[26.58px] max-mobile:ml-[89.7px] max-mobile:rounded-[6.64px] max-mobile:border-[0.83px] max-mobile:blur-[3.32] max-mobile:shadow-[0_3.32px_9.97px_0_rgba(28,29,32,0.08)]'>
                      <p className='font-[500] text-[14.12px] leading-[21.17px] text-whi
                                    max-mobile:text-[9.97px] max-mobile:leading-[14.95px]'>07h 09m 12s</p>
                    </div>
                  </div>
                  <div className='w-[243.49px] h-[95.95px] mt-[18.82px] ml-[18.82px] flex flex-col justify-between
                                  max-mobile:w-[171.92px] max-mobile:h-[67.75px] max-mobile:mt-[13.29px] max-mobile:ml-[13.29px]'>
                    <p className='font-[600] text-[21.17px] leading-[29.64px] text-bla
                                  max-mobile:text-[14.95px] max-mobile:leading-[20.93px]'>Sun-Glass</p>
                    <div className='w-[243.49px] h-[51.76px] flex flex-row justify-between
                                    max-mobile:w-[171.92px] max-mobile:h-[36.54px]'>
                      <div className='w-[121.74px] h-[50.71px] gap-[4.71px] flex flex-col
                                      max-mobile:w-[85.96px] max-mobile:h-[35.32px] max-mobile:gap-[3.32px]'>
                        <p className='font-[400] text-[14.12px] leading-[21.17px] text-[#94A3B8]
                                      max-mobile:text-[9.97px] max-mobile:leading-[14.95px]'>Current bid</p>
                        <div className='w-[53.53px] h-[25px] gap-[2.35px] flex flex-row justify-between itemc-center
                                        max-mobile:w-[37.61px] max-mobile:h-[17px] max-mobile:gap-[1.66px]'>
                          <div className='w-[21.17px] h-[21.17px] flex justify-center items-center
                                          max-mobile:w-[14.95px] max-mobile:h-[14.95px]'>
                            <div className='w-[11.03px] h-[18.09px] bg-weekly_eth
                                            max-mobile:w-[7.79px] max-mobile:h-[12.77px]'></div>
                          </div>
                          <p className='font-[500] text-[16.47px] leading-[24.7px]
                                        max-mobile:text-[11.63px] max-mobile:leading-[17.44px]'>1.75</p>
                        </div>
                      </div>
                      <button className='w-[121.74px] h-[51.76px] bg-bla rounded-[11.76px] gap-[11.76px] flex justify-center items-center
                                         max-mobile:w-[85.96px] max-mobile:h-[36.54px] max-mobile:rounded-[8.31px] max-mobile:gap-[8.31px]'>
                        <p className='font-[600] text-[14.12px] leading-[21.17px] text-whi
                                      max-mobile:font-[700] max-mobile:text-[9.97px] max-mobile:leading-[14.95px]'>PLACE BID</p>
                      </button>
                    </div>
                  </div>
            </div>
            {/*End - First Card*/}
            {/*Start - Second Card*/}
            <div className='w-[281.13px] h-[402.28px] pt-[14.11px] bg-whi rounded-[23.48px] shadow-[38.82px_11.76px_58.81px_0_rgba(199,199,199,0.6)]
                                max-mobile:w-[198.49px] max-mobile:h-[284.04px] max-mobile:pt-[9.97px] max-mobile:rounded-[16.61px] max-mobile:shadow-[12.51px_8.31px_41.53px_0_rgba(199,199,199,0.6)]'>
                  <div className='w-[252.9px] h-[252.9px] ml-[14.12px] pt-[14.12px] rounded-[23.48px] bg-weekly_card_2
                                  max-mobile:w-[178.56px] max-mobile:h-[178.56px] max-mobile:ml-[9.97px] max-mobile:pt-[9.96px] max-mobile:rounded-[16.58px]'>
                    <div className='bg-[#1C1D20]/35 w-[116.58px] h-[37.64px] ml-[127.04px] rounded-[9.41px] border-[1.18px] border-[#1C1D20]/8 blur-[4.71] shadow-[0_4.71px_14.12px_0_rgba(28, 29, 32, 0.08)] flex justify-center items-center
                                    max-mobile:w-[80.99px] max-mobile:h-[26.58px] max-mobile:ml-[89.7px] max-mobile:rounded-[6.64px] max-mobile:border-[0.83px] max-mobile:blur-[3.32] max-mobile:shadow-[0_3.32px_9.97px_0_rgba(28,29,32,0.08)]'>
                      <p className='font-[500] text-[14.12px] leading-[21.17px] text-whi
                                    max-mobile:text-[9.97px] max-mobile:leading-[14.95px]'>07h 09m 12s</p>
                    </div>
                  </div>
                  <div className='w-[243.49px] h-[95.95px] mt-[18.82px] ml-[18.82px] flex flex-col justify-between
                                  max-mobile:w-[171.92px] max-mobile:h-[67.75px] max-mobile:mt-[13.29px] max-mobile:ml-[13.29px]'>
                    <p className='font-[600] text-[21.17px] leading-[29.64px] text-bla
                                  max-mobile:text-[14.95px] max-mobile:leading-[20.93px]'>Sun-Glass</p>
                    <div className='w-[243.49px] h-[51.76px] flex flex-row justify-between
                                    max-mobile:w-[171.92px] max-mobile:h-[36.54px]'>
                      <div className='w-[121.74px] h-[50.71px] gap-[4.71px] flex flex-col
                                      max-mobile:w-[85.96px] max-mobile:h-[35.32px] max-mobile:gap-[3.32px]'>
                        <p className='font-[400] text-[14.12px] leading-[21.17px] text-[#94A3B8]
                                      max-mobile:text-[9.97px] max-mobile:leading-[14.95px]'>Current bid</p>
                        <div className='w-[53.53px] h-[25px] gap-[2.35px] flex flex-row justify-between itemc-center
                                        max-mobile:w-[37.61px] max-mobile:h-[17px] max-mobile:gap-[1.66px]'>
                          <div className='w-[21.17px] h-[21.17px] flex justify-center items-center
                                          max-mobile:w-[14.95px] max-mobile:h-[14.95px]'>
                            <div className='w-[11.03px] h-[18.09px] bg-weekly_eth
                                            max-mobile:w-[7.79px] max-mobile:h-[12.77px]'></div>
                          </div>
                          <p className='font-[500] text-[16.47px] leading-[24.7px]
                                        max-mobile:text-[11.63px] max-mobile:leading-[17.44px]'>1.75</p>
                        </div>
                      </div>
                      <button className='w-[121.74px] h-[51.76px] bg-bla rounded-[11.76px] gap-[11.76px] flex justify-center items-center
                                         max-mobile:w-[85.96px] max-mobile:h-[36.54px] max-mobile:rounded-[8.31px] max-mobile:gap-[8.31px]'>
                        <p className='font-[600] text-[14.12px] leading-[21.17px] text-whi
                                      max-mobile:font-[700] max-mobile:text-[9.97px] max-mobile:leading-[14.95px]'>PLACE BID</p>
                      </button>
                    </div>
                  </div>
            </div>
            {/*End - Second Card*/}
            {/*Start - Third Card*/}
            <div className='w-[281.13px] h-[402.28px] pt-[14.11px] bg-whi rounded-[23.48px] shadow-[38.82px_11.76px_58.81px_0_rgba(199,199,199,0.6)]
                                max-mobile:w-[198.49px] max-mobile:h-[284.04px] max-mobile:pt-[9.97px] max-mobile:rounded-[16.61px] max-mobile:shadow-[12.51px_8.31px_41.53px_0_rgba(199,199,199,0.6)]'>
                  <div className='w-[252.9px] h-[252.9px] ml-[14.12px] pt-[14.12px] rounded-[23.48px] bg-weekly_card_3
                                  max-mobile:w-[178.56px] max-mobile:h-[178.56px] max-mobile:ml-[9.97px] max-mobile:pt-[9.96px] max-mobile:rounded-[16.58px]'>
                    <div className='bg-[#1C1D20]/35 w-[116.58px] h-[37.64px] ml-[127.04px] rounded-[9.41px] border-[1.18px] border-[#1C1D20]/8 blur-[4.71] shadow-[0_4.71px_14.12px_0_rgba(28, 29, 32, 0.08)] flex justify-center items-center
                                    max-mobile:w-[80.99px] max-mobile:h-[26.58px] max-mobile:ml-[89.7px] max-mobile:rounded-[6.64px] max-mobile:border-[0.83px] max-mobile:blur-[3.32] max-mobile:shadow-[0_3.32px_9.97px_0_rgba(28,29,32,0.08)]'>
                      <p className='font-[500] text-[14.12px] leading-[21.17px] text-whi
                                    max-mobile:text-[9.97px] max-mobile:leading-[14.95px]'>07h 09m 12s</p>
                    </div>
                  </div>
                  <div className='w-[243.49px] h-[95.95px] mt-[18.82px] ml-[18.82px] flex flex-col justify-between
                                  max-mobile:w-[171.92px] max-mobile:h-[67.75px] max-mobile:mt-[13.29px] max-mobile:ml-[13.29px]'>
                    <p className='font-[600] text-[21.17px] leading-[29.64px] text-bla
                                  max-mobile:text-[14.95px] max-mobile:leading-[20.93px]'>Sun-Glass</p>
                    <div className='w-[243.49px] h-[51.76px] flex flex-row justify-between
                                    max-mobile:w-[171.92px] max-mobile:h-[36.54px]'>
                      <div className='w-[121.74px] h-[50.71px] gap-[4.71px] flex flex-col
                                      max-mobile:w-[85.96px] max-mobile:h-[35.32px] max-mobile:gap-[3.32px]'>
                        <p className='font-[400] text-[14.12px] leading-[21.17px] text-[#94A3B8]
                                      max-mobile:text-[9.97px] max-mobile:leading-[14.95px]'>Current bid</p>
                        <div className='w-[53.53px] h-[25px] gap-[2.35px] flex flex-row justify-between itemc-center
                                        max-mobile:w-[37.61px] max-mobile:h-[17px] max-mobile:gap-[1.66px]'>
                          <div className='w-[21.17px] h-[21.17px] flex justify-center items-center
                                          max-mobile:w-[14.95px] max-mobile:h-[14.95px]'>
                            <div className='w-[11.03px] h-[18.09px] bg-weekly_eth
                                            max-mobile:w-[7.79px] max-mobile:h-[12.77px]'></div>
                          </div>
                          <p className='font-[500] text-[16.47px] leading-[24.7px]
                                        max-mobile:text-[11.63px] max-mobile:leading-[17.44px]'>1.75</p>
                        </div>
                      </div>
                      <button className='w-[121.74px] h-[51.76px] bg-bla rounded-[11.76px] gap-[11.76px] flex justify-center items-center
                                         max-mobile:w-[85.96px] max-mobile:h-[36.54px] max-mobile:rounded-[8.31px] max-mobile:gap-[8.31px]'>
                        <p className='font-[600] text-[14.12px] leading-[21.17px] text-whi
                                      max-mobile:font-[700] max-mobile:text-[9.97px] max-mobile:leading-[14.95px]'>PLACE BID</p>
                      </button>
                    </div>
                  </div>
            </div>
            {/*End - Third Card*/}
            {/*Start - Fourth Card*/}
            <div className='w-[281.13px] h-[402.28px] pt-[14.11px] bg-whi rounded-[23.48px] shadow-[38.82px_11.76px_58.81px_0_rgba(199,199,199,0.6)]
                                max-mobile:w-[198.49px] max-mobile:h-[284.04px] max-mobile:pt-[9.97px] max-mobile:rounded-[16.61px] max-mobile:shadow-[12.51px_8.31px_41.53px_0_rgba(199,199,199,0.6)]'>
                  <div className='w-[252.9px] h-[252.9px] ml-[14.12px] pt-[14.12px] rounded-[23.48px] bg-weekly_card_4
                                  max-mobile:w-[178.56px] max-mobile:h-[178.56px] max-mobile:ml-[9.97px] max-mobile:pt-[9.96px] max-mobile:rounded-[16.58px]'>
                    <div className='bg-[#1C1D20]/35 w-[116.58px] h-[37.64px] ml-[127.04px] rounded-[9.41px] border-[1.18px] border-[#1C1D20]/8 blur-[4.71] shadow-[0_4.71px_14.12px_0_rgba(28, 29, 32, 0.08)] flex justify-center items-center
                                    max-mobile:w-[80.99px] max-mobile:h-[26.58px] max-mobile:ml-[89.7px] max-mobile:rounded-[6.64px] max-mobile:border-[0.83px] max-mobile:blur-[3.32] max-mobile:shadow-[0_3.32px_9.97px_0_rgba(28,29,32,0.08)]'>
                      <p className='font-[500] text-[14.12px] leading-[21.17px] text-whi
                                    max-mobile:text-[9.97px] max-mobile:leading-[14.95px]'>19h 09m 12s</p>
                    </div>
                  </div>
                  <div className='w-[243.49px] h-[95.95px] mt-[18.82px] ml-[18.82px] flex flex-col justify-between
                                  max-mobile:w-[171.92px] max-mobile:h-[67.75px] max-mobile:mt-[13.29px] max-mobile:ml-[13.29px]'>
                    <p className='font-[600] text-[21.17px] leading-[29.64px] text-bla
                                  max-mobile:text-[14.95px] max-mobile:leading-[20.93px]'>NuEvey</p>
                    <div className='w-[243.49px] h-[51.76px] flex flex-row justify-between
                                    max-mobile:w-[171.92px] max-mobile:h-[36.54px]'>
                      <div className='w-[121.74px] h-[50.71px] gap-[4.71px] flex flex-col
                                      max-mobile:w-[85.96px] max-mobile:h-[35.32px] max-mobile:gap-[3.32px]'>
                        <p className='font-[400] text-[14.12px] leading-[21.17px] text-[#94A3B8]
                                      max-mobile:text-[9.97px] max-mobile:leading-[14.95px]'>Current bid</p>
                        <div className='w-[53.53px] h-[25px] gap-[2.35px] flex flex-row justify-between itemc-center
                                        max-mobile:w-[37.61px] max-mobile:h-[17px] max-mobile:gap-[1.66px]'>
                          <div className='w-[21.17px] h-[21.17px] flex justify-center items-center
                                          max-mobile:w-[14.95px] max-mobile:h-[14.95px]'>
                            <div className='w-[11.03px] h-[18.09px] bg-weekly_eth
                                            max-mobile:w-[7.79px] max-mobile:h-[12.77px]'></div>
                          </div>
                          <p className='font-[500] text-[16.47px] leading-[24.7px]
                                        max-mobile:text-[11.63px] max-mobile:leading-[17.44px]'>1.25</p>
                        </div>
                      </div>
                      <button className='w-[121.74px] h-[51.76px] bg-bla rounded-[11.76px] gap-[11.76px] flex justify-center items-center
                                         max-mobile:w-[85.96px] max-mobile:h-[36.54px] max-mobile:rounded-[8.31px] max-mobile:gap-[8.31px]'>
                        <p className='font-[600] text-[14.12px] leading-[21.17px] text-whi
                                      max-mobile:font-[700] max-mobile:text-[9.97px] max-mobile:leading-[14.95px]'>PLACE BID</p>
                      </button>
                    </div>
                  </div>
            </div>
            {/*End - Fourth Card*/}
            {/*Start - Fifth Card*/}
            <div className='w-[281.13px] h-[402.28px] pt-[14.11px] bg-whi rounded-[23.48px] shadow-[38.82px_11.76px_58.81px_0_rgba(199,199,199,0.6)]
                                max-mobile:w-[198.49px] max-mobile:h-[284.04px] max-mobile:pt-[9.97px] max-mobile:rounded-[16.61px] max-mobile:shadow-[12.51px_8.31px_41.53px_0_rgba(199,199,199,0.6)]'>
                  <div className='w-[252.9px] h-[252.9px] ml-[14.12px] pt-[14.12px] rounded-[23.48px] bg-weekly_card_5
                                  max-mobile:w-[178.56px] max-mobile:h-[178.56px] max-mobile:ml-[9.97px] max-mobile:pt-[9.96px] max-mobile:rounded-[16.58px]'>
                    <div className='bg-[#1C1D20]/35 w-[116.58px] h-[37.64px] ml-[127.04px] rounded-[9.41px] border-[1.18px] border-[#1C1D20]/8 blur-[4.71] shadow-[0_4.71px_14.12px_0_rgba(28, 29, 32, 0.08)] flex justify-center items-center
                                    max-mobile:w-[80.99px] max-mobile:h-[26.58px] max-mobile:ml-[89.7px] max-mobile:rounded-[6.64px] max-mobile:border-[0.83px] max-mobile:blur-[3.32] max-mobile:shadow-[0_3.32px_9.97px_0_rgba(28,29,32,0.08)]'>
                      <p className='font-[500] text-[14.12px] leading-[21.17px] text-whi
                                    max-mobile:text-[9.97px] max-mobile:leading-[14.95px]'>19h 09m 12s</p>
                    </div>
                  </div>
                  <div className='w-[243.49px] h-[95.95px] mt-[18.82px] ml-[18.82px] flex flex-col justify-between
                                  max-mobile:w-[171.92px] max-mobile:h-[67.75px] max-mobile:mt-[13.29px] max-mobile:ml-[13.29px]'>
                    <p className='font-[600] text-[21.17px] leading-[29.64px] text-bla
                                  max-mobile:text-[14.95px] max-mobile:leading-[20.93px]'>NuEvey</p>
                    <div className='w-[243.49px] h-[51.76px] flex flex-row justify-between
                                    max-mobile:w-[171.92px] max-mobile:h-[36.54px]'>
                      <div className='w-[121.74px] h-[50.71px] gap-[4.71px] flex flex-col
                                      max-mobile:w-[85.96px] max-mobile:h-[35.32px] max-mobile:gap-[3.32px]'>
                        <p className='font-[400] text-[14.12px] leading-[21.17px] text-[#94A3B8]
                                      max-mobile:text-[9.97px] max-mobile:leading-[14.95px]'>Current bid</p>
                        <div className='w-[53.53px] h-[25px] gap-[2.35px] flex flex-row justify-between itemc-center
                                        max-mobile:w-[37.61px] max-mobile:h-[17px] max-mobile:gap-[1.66px]'>
                          <div className='w-[21.17px] h-[21.17px] flex justify-center items-center
                                          max-mobile:w-[14.95px] max-mobile:h-[14.95px]'>
                            <div className='w-[11.03px] h-[18.09px] bg-weekly_eth
                                            max-mobile:w-[7.79px] max-mobile:h-[12.77px]'></div>
                          </div>
                          <p className='font-[500] text-[16.47px] leading-[24.7px]
                                        max-mobile:text-[11.63px] max-mobile:leading-[17.44px]'>1.25</p>
                        </div>
                      </div>
                      <button className='w-[121.74px] h-[51.76px] bg-bla rounded-[11.76px] gap-[11.76px] flex justify-center items-center
                                         max-mobile:w-[85.96px] max-mobile:h-[36.54px] max-mobile:rounded-[8.31px] max-mobile:gap-[8.31px]'>
                        <p className='font-[600] text-[14.12px] leading-[21.17px] text-whi
                                      max-mobile:font-[700] max-mobile:text-[9.97px] max-mobile:leading-[14.95px]'>PLACE BID</p>
                      </button>
                    </div>
                  </div>
            </div>
            {/*End - Fifth Card*/}
          </div>
          {/*End - Cards*/}
          {/*Start - Arrows and Users*/}
          <div className='w-[704px] h-[273.72px] flex flex-row items-center ml-[500px]
                          max-mobile:w-[102px] max-mobile:h-[157.96px] max-mobile:ml-[0]'>
            {/*Start - Arrows*/}
            <div className='w-[166px] h-[68.99px] bg-[#FCFCFD] rounded-[17.25px] gap-[10.78px] shadow-[0_43.12px_34.49px_-25.87px_rgba(15,15,15,0.12)] flex justify-center items-center
                            max-mobile:w-[102px] max-mobile:h-[42.39px] max-mobile:rounded-[10.6px] max-mobile:gap-[6.62px] max-mobile:shadow-[0,16.49px_21.19px_-15.9px_rgba(15,15,15,0.12)'>
              <div className='w-[122.88px] h-[25.87px] gap-[34.49px] flex flex-row items-center
                              max-mobile:w-[75.51px] max-mobile:[15.9px] max-mobile:gap-[21.19px]'>
                <button className='w-[25.87px] h-[25.87px] flex items-center justify-center
                                max-mobile:w-[15.9px] max-mobile:h-[15.9px]'>
                  <div className='w-[15.09px] h-[9.7px] bg-weekly_left_arrow
                                  max-mobile:w-[9.27px] max-mobile:h-[5.96px]'></div>
                </button>
                <div className='w-[2.16px] h-[25.87px] rounded-[2.16px] bg-[#E6E8EC]
                                max-mobile:w-[1.32px] max-mobile:h-[15.9px] max-mobile:rounded-[1.32px]'></div>
                <button className='w-[25.87px] h-[25.87px] flex items-center justify-center
                                max-mobile:w-[15.9px] max-mobile:h-[15.9px]'>
                  <div className='w-[15.09px] h-[9.7px] bg-weekly_right_arrow
                                  max-mobile:w-[9.27px] max-mobile:h-[5.96px]'></div>
                </button>
              </div>
            </div>
            {/*End - Arrows*/}
            {/*Start - Users*/}
            <div className='w-[365px] h-[246px] bg-whi mt-[280.58px] ml-[173px] border-[1px] border-[#EDF2F7] rounded-[16px] shadow-[10px_10px_50px_0_rgba(20,20,22,0.1)] flex flex-col justify-between max-mobile:hidden'>
              <div className='w-[363px] h-[54.37px] flex flex-row'>
                <p className='w-[161px] h-[28px] ml-[24px] mt-[26.37px] font-[600] text-[21px] leading-[28.35px] text-[#1A202C]'>Recent Viewed</p>
                <div className='w-[24px] h-[10.7px] ml-[132px] mt-[35.27px] bg-points_3'></div>
              </div>
              <div className='w-[363px] h-[164px]'>
                {/*Start - Alex Ca.*/}
                <div className='w-[314px] h-[61.46px] ml-[27px] flex flex-row justify-between items-center'>
                  <div className='w-[129.22px] h-[48.68px] gap-[15.36px] flex flex-row justify-between items-center'>
                    <div className='w-[51.85px] h-[48.01px] relative'>
                      <div className='w-[46.09] h-[46.09px] rounded-[960.24px] border-[1.92px] top-[0.33px] border-whi bg-weekly_users_1 absolute'></div>
                      <div className='w-[21.13px] h-[21.13px] bg-whi rounded-[100%] absolute top-[26.89px] left-[30.73px] flex justify-center items-center'>
                        <p className='w-[5px] h-[17px] font-[700] text-[11.52px] leading-[17.28px]'>1</p>
                      </div>
                    </div>
                    <div className='w-[62px] h-[48.68px] gap-[7.68px] flex flex-col justify-between'>
                      <p className='w-[62px] h-[22px] font-[500] text-[15.36px] leading-[21.52px] text-bla'>Alex Ca.</p>
                      <p className='w-[33px] h-[19px] font-[400] text-[12.48px] leading-[18.72px] text-[#64748B]'>Alexy</p>
                    </div>
                  </div>
                  <div className='w-[63.2px] h-[49.68px] gap-[7.68px] flex flex-col justify-between items-end'>
                    <div className='w-[63.2px] h-[22px] gap-[1.92px] flex flex-row justify-between items-center'>
                      <div className='w-[17.28px] h-[17.28px] flex justify-center items-center'>
                        <div className='w-[9px] h-[14.76px] bg-weekly_users_eth'></div>
                      </div>
                      <p className='w-[44px] h-[22px] font-[600] text-[15.36px] leading-[21.51px] text-bla'>8,456</p>
                    </div>
                    <p className='w-[55px] h-[20px] font-[400] text-[13.44px] leading-[20.17px] text-[#10C352]'>+23,00%</p>
                  </div>
                </div>
                {/*End - Alex Ca.*/}
                {/*Start - Juliya S.*/}
                <div className='w-[314px] h-[61.46px] ml-[27px] mt-[20px] flex flex-row justify-between items-center'>
                  <div className='w-[132.22px] h-[48.68px] gap-[15.36px] flex flex-row justify-between items-center'>
                    <div className='w-[51.85px] h-[48.01px] relative'>
                      <div className='w-[46.09px] h-[46.09px] rounded-[960.24px] border-[1.92px] top-[0.33px] border-whi bg-weekly_users_2 absolute'></div>
                      <div className='w-[21.13px] h-[21.13px] bg-whi rounded-[100%] absolute top-[26.89px] left-[30.73px] flex justify-center items-center'>
                        <p className='w-[7px] h-[17px] font-[700] text-[11.52px] leading-[17.28px]'>2</p>
                      </div>
                    </div>
                    <div className='w-[65px] h-[48.68px] gap-[7.68px] flex flex-col justify-between'>
                      <p className='w-[65px] h-[22px] font-[600] text-[15.36px] leading-[21.51px] text-bla'>Juliya S.</p>
                      <p className='w-[44px] h-[19px] font-[400] text-[12.48px] leading-[18.72px] text-[#64748B]'>JuliyaS</p>
                    </div>
                  </div>
                  <div className='w-[60.2px] h-[49.68px] gap-[7.68px] flex flex-col justify-between items-end'>
                    <div className='w-[60.2px] h-[22px] gap-[1.92px] flex flex-row justify-between items-center'>
                      <div className='w-[17.28px] h-[17.28px] flex justify-center items-center'>
                        <div className='w-[9px] h-[14.76px] bg-weekly_users_eth'></div>
                      </div>
                      <p className='w-[41px] h-[22px] font-[600] text-[15.36px] leading-[21.51px] text-bla'>5,327</p>
                    </div>
                    <p className='w-[49px] h-[20px] font-[400] text-[13.44px] leading-[20.17px] text-[#E23333]'>-32,01%</p>
                  </div>
                </div>
                {/*End - Juliya S.*/}
              </div>
            </div>
            {/*End - Users*/}
          </div>
          {/*End - Arrows and Users*/}
        </div>
      </div>
      {/*End - WEEKLY*/}
      {/*Start - TOP COLLECTION*/}
        <div className='mt-[236.41px] mr-[95px] ml-[98px] flex flex-col
                        max-mobile:mt-[77px] max-mobile:mr-[29px] max-mobile:ml-[29px]'>
          {/*Start - Main Text*/}
          <p className='text-bla font-[600] text-[45.04px] text-center leading-[44.75px]
                        max-mobile:text-[30px]'>Top Collection</p>
          {/*End - Main Text*/}
          {/*Start - Panel*/}
          <div className='mt-[90.59px] flex flex-row justify-between
                          max-mobile:mt-[40px]'>
            <p className='font-[500] leading-[28.6px] text-[#93989A] text-[22px]
                          max-mobile:leading-[18.2px] max-mobile:text-[14px]'>Collection</p>
            <div className='w-[60%] flex flex-row items-between justify-between
                            max-mobile:w-auto'>
              <p className='font-[500] text-[22px] leading-[28.6px] text-[#93989A]
                              max-mobile:text-[14px] max-mobile:leading-[18.2px]'>Volume</p>
              <p className='font-[500] text-[22px] leading-[28.6px] text-[#93989A] max-mobile:hidden'>24h %</p>
              <p className='font-[500] text-[22px] leading-[28.6px] text-[#93989A] max-mobile:hidden'>Floor Price</p>
              <p className='font-[500] text-[22px] leading-[28.6px] text-[#93989A] max-mobile:hidden'>Owners</p>
              <p className='font-[500] text-[22px] leading-[28.6px] text-[#93989A] max-mobile:hidden'>Items</p>
            </div>
          </div>
          {/*End - Panel*/}
          {/*Start - Users*/}
          {/*Start - User 1*/}
          <div className='mt-[3%] flex flex-col justify-between
                          max-mobile:mt-[25px]'>
            <div className='flex flex-row items-center justify-between'>
              <div className='w-[19%] flex flex-row items-center justify-between
                              max-mobile:w-[41%]'>
                <div className='max-mobile:w-[52.02px] max-mobile:h-[48.16px] max-mobile:relative'>
                  <div className='w-[84.04px] h-[84.04px] rounded-[1750.91px] border-[3.5px] border-whi bg-top_collection_image_1
                                  max-mobile:w-[46.24px] max-mobile:h-[46.24px] max-mobile:rounded-[963.3px] max-mobile:border-[1.93px] max-mobile:absolute max-mobile:top-[0.27px]'></div>
                  <div className='min-mobile:hidden w-[21.19px] h-[21.19px] top-[27.24px] left-[30.83px] rounded-[100%] bg-whi flex justify-center items-center absolute'>
                    <p className='font-[700] text-[11.56px] leading-[17.34px] text-bla'>1</p>
                  </div>
                </div>
                <div className='h-[74.75px] flex flex-col justify-between
                                max-mobile:h-[48.71px]'>
                  <p className='font-[500] text-[28.01px] leading-[39.22px] text-bla
                                max-mobile:text-[15.41px] max-mobile:leading-[21.58px]'>Alex Ca.</p>
                  <p className='font-[400] text-[22.76px] leading-[34.14px] text-[#64748B]
                                max-mobile:text-[12.52px] max-mobile:leading-[18.78px]'>By Alex</p>
                </div>
              </div>
              <div className='w-[62%] h-[34px] flex flex-row justify-between
                              max-mobile:w-[63.27px] max-mobile:h-[49.71px] max-mobile:flex-col max-mobile:items-end'>
                <div className='w-[105.02px] h-[34px] flex flex-row justify-between items-center
                                max-mobile:w-[63.27px] max-mobile:h-[22px] max-mobile:gap-[1.93px]'>
                  <div className='w-[31.52px] h-[31.52px] flex justify-center items-center
                                  max-mobile:w-[17.34px] max-mobile:h-[17.34px]'>
                    <div className='w-[16.41px] h-[26.92px] bg-top_collection_eth
                                    max-mobile:w-[9.03px] max-mobile:h-[14.81px]'></div>
                  </div>
                  <p className='font-[600] text-[24.51px] leading-[34.32px] text-bla
                                max-mobile:text-[15.41px] max-mobile:leading-[21.58px]'>8,456</p>
                </div>
                <p className='font-[500] text-[24.51px] leading-[31.87px] text-[#10C352]
                              max-mobile:font-[400] max-mobile:text-[13.49px] max-mobile:leading-[20.23px]'>+ 27.78%</p>
                <div className='max-mobile:hidden mr-[8%]'>
                  <div className='w-[72.02px] flex flex-row justify-between items-center'>
                    <div className='w-[31.52px] flex justify-center items-center'>
                      <div className='w-[16.41px] h-[26.92px] bg-top_collection_eth'></div>
                    </div>
                    <p className='font-[600] text-[24.51px] leading-[34.32px] text-bla'>3,5</p>
                  </div>
                </div>
                <p className='max-mobile:hidden font-[500] text-[23.65px] leading-[30.75px] text-[#010101] mr-[8%]'>2.2К</p>
                <p className='max-mobile:hidden font-[500] text-[23.65px] leading-[30.75px] text-[#010101]'>500</p>
              </div>
            </div>
            <div className='h-[1.7px] bg-[#EBE9E9] mt-[2%]
                            max-mobile:h-[1px]'></div>
          </div>
          {/*End - User 1*/}
          {/*Start - User 2*/}
          <div className='mt-[3%] flex flex-col justify-between
                          max-mobile:mt-[25px]'>
            <div className='flex flex-row items-center justify-between'>
              <div className='w-[19%] flex flex-row items-center justify-between
                              max-mobile:w-[41%]'>
                <div className='max-mobile:w-[52.02px] max-mobile:h-[48.16px] max-mobile:relative'>
                  <div className='w-[84.04px] h-[84.04px] rounded-[1750.91px] border-[3.5px] border-whi bg-top_collection_image_2
                                  max-mobile:w-[46.24px] max-mobile:h-[46.24px] max-mobile:rounded-[963.3px] max-mobile:border-[1.93px] max-mobile:absolute max-mobile:top-[0.27px]'></div>
                  <div className='min-mobile:hidden w-[21.19px] h-[21.19px] top-[27.24px] left-[30.83px] rounded-[100%] bg-whi flex justify-center items-center absolute'>
                    <p className='font-[700] text-[11.56px] leading-[17.34px] text-bla'>2</p>
                  </div>
                </div>
                <div className='h-[74.75px] flex flex-col justify-between
                                max-mobile:h-[48.71px]'>
                  <p className='font-[500] text-[28.01px] leading-[39.22px] text-bla
                                max-mobile:text-[15.41px] max-mobile:leading-[21.58px]'>Alex Ca.</p>
                  <p className='font-[400] text-[22.76px] leading-[34.14px] text-[#64748B]
                                max-mobile:text-[12.52px] max-mobile:leading-[18.78px]'>By Alex</p>
                </div>
              </div>
              <div className='w-[62%] h-[34px] flex flex-row justify-between
                              max-mobile:w-[63.27px] max-mobile:h-[49.71px] max-mobile:flex-col max-mobile:items-end'>
                <div className='w-[105.02px] h-[34px] flex flex-row justify-between items-center
                                max-mobile:w-[63.27px] max-mobile:h-[22px] max-mobile:gap-[1.93px]'>
                  <div className='w-[31.52px] h-[31.52px] flex justify-center items-center
                                  max-mobile:w-[17.34px] max-mobile:h-[17.34px]'>
                    <div className='w-[16.41px] h-[26.92px] bg-top_collection_eth
                                    max-mobile:w-[9.03px] max-mobile:h-[14.81px]'></div>
                  </div>
                  <p className='font-[600] text-[24.51px] leading-[34.32px] text-bla
                                max-mobile:text-[15.41px] max-mobile:leading-[21.58px]'>4,780</p>
                </div>
                <p className='font-[500] text-[24.51px] leading-[31.87px] text-[#10C352]
                              max-mobile:font-[400] max-mobile:text-[13.49px] max-mobile:leading-[20.23px]'>+ 27.78%</p>
                <div className='max-mobile:hidden mr-[8%]'>
                  <div className='w-[72.02px] flex flex-row justify-between items-center'>
                    <div className='w-[31.52px] h-[31.52px] flex justify-center items-center'>
                      <div className='w-[16.41px] h-[26.92px] bg-top_collection_eth'></div>
                    </div>
                    <p className='font-[600] text-[24.51px] leading-[34.32px] text-bla'>7,9</p>
                  </div>
                </div>
                <p className='max-mobile:hidden font-[500] text-[23.65px] leading-[30.75px] text-[#010101] mr-[8%]'>3.4К</p>
                <p className='max-mobile:hidden font-[500] text-[23.65px] leading-[30.75px] text-[#010101]'>900</p>
              </div>
            </div>
            <div className='h-[1.7px] bg-[#EBE9E9] mt-[2%]
                            max-mobile:h-[1px]'></div>
          </div>
          {/*End - User 2*/}
          {/*Start - User 3*/}
          <div className='mt-[3%] flex flex-col justify-between
                          max-mobile:mt-[25px]'>
            <div className='flex flex-row items-center justify-between'>
              <div className='w-[19%] flex flex-row items-center justify-between
                              max-mobile:w-[41%]'>
                <div className='max-mobile:w-[52.02px] max-mobile:h-[48.16px] max-mobile:relative'>
                  <div className='w-[84.04px] h-[84.04px] rounded-[1750.91px] border-[3.5px] border-whi bg-top_collection_image_1
                                  max-mobile:w-[46.24px] max-mobile:h-[46.24px] max-mobile:rounded-[963.3px] max-mobile:border-[1.93px] max-mobile:absolute max-mobile:top-[0.27px]'></div>
                  <div className='min-mobile:hidden w-[21.19px] h-[21.19px] top-[27.24px] left-[30.83px] rounded-[100%] bg-whi flex justify-center items-center absolute'>
                    <p className='font-[700] text-[11.56px] leading-[17.34px] text-bla'>3</p>
                  </div>
                </div>
                <div className='h-[74.75px] flex flex-col justify-between
                                max-mobile:h-[48.71px]'>
                  <p className='font-[500] text-[28.01px] leading-[39.22px] text-bla
                                max-mobile:text-[15.41px] max-mobile:leading-[21.58px]'>Alex Ca.</p>
                  <p className='font-[400] text-[22.76px] leading-[34.14px] text-[#64748B]
                                max-mobile:text-[12.52px] max-mobile:leading-[18.78px]'>By Alex</p>
                </div>
              </div>
              <div className='w-[62%] h-[34px] flex flex-row justify-between
                              max-mobile:w-[63.27px] max-mobile:h-[49.71px] max-mobile:flex-col max-mobile:items-end'>
                <div className='w-[105.02px] h-[34px] flex flex-row justify-between items-center
                                max-mobile:w-[63.27px] max-mobile:h-[22px] max-mobile:gap-[1.93px]'>
                  <div className='w-[31.52px] h-[31.52px] flex justify-center items-center
                                  max-mobile:w-[17.34px] max-mobile:h-[17.34px]'>
                    <div className='w-[16.41px] h-[26.92px] bg-top_collection_eth
                                    max-mobile:w-[9.03px] max-mobile:h-[14.81px]'></div>
                  </div>
                  <p className='font-[600] text-[24.51px] leading-[34.32px] text-bla
                                max-mobile:text-[15.41px] max-mobile:leading-[21.58px]'>8,456</p>
                </div>
                <p className='font-[500] text-[24.51px] leading-[31.87px] text-[#10C352]
                              max-mobile:font-[400] max-mobile:text-[13.49px] max-mobile:leading-[20.23px]'>+ 27.78%</p>
                <div className='max-mobile:hidden mr-[8%]'>
                  <div className='w-[72.02px] flex flex-row justify-between items-center'>
                    <div className='w-[31.52px] h-[31.52px] flex justify-center items-center'>
                      <div className='w-[16.41px] h-[26.92px] bg-top_collection_eth'></div>
                    </div>
                    <p className='font-[600] text-[24.51px] leading-[34.32px] text-bla'>3,5</p>
                  </div>
                </div>
                <p className='max-mobile:hidden font-[500] text-[23.65px] leading-[30.75px] text-[#010101] mr-[8%]'>2.2К</p>
                <p className='max-mobile:hidden font-[500] text-[23.65px] leading-[30.75px] text-[#010101]'>500</p>
              </div>
            </div>
            <div className='h-[1.7px] bg-[#EBE9E9] mt-[2%]
                            max-mobile:h-[1px]'></div>
          </div>
          {/*End - User 3*/}
          {/*Start - User 4*/}
          <div className='mt-[3%] flex flex-col justify-between
                          max-mobile:mt-[25px]'>
            <div className='flex flex-row items-center justify-between'>
              <div className='w-[19%] flex flex-row items-center justify-between
                              max-mobile:w-[41%]'>
                <div className='max-mobile:w-[52.02px] max-mobile:h-[48.16px] max-mobile:relative'>
                  <div className='w-[84.04px] h-[84.04px] rounded-[1750.91px] border-[3.5px] border-whi bg-top_collection_image_2
                                  max-mobile:w-[46.24px] max-mobile:h-[46.24px] max-mobile:rounded-[963.3px] max-mobile:border-[1.93px] max-mobile:absolute max-mobile:top-[0.27px]'></div>
                  <div className='min-mobile:hidden w-[21.19px] h-[21.19px] top-[27.24px] left-[30.83px] rounded-[100%] bg-whi flex justify-center items-center absolute'>
                    <p className='font-[700] text-[11.56px] leading-[17.34px] text-bla'>4</p>
                  </div>
                </div>
                <div className='h-[74.75px] flex flex-col justify-between
                                max-mobile:h-[48.71px]'>
                  <p className='font-[500] text-[28.01px] leading-[39.22px] text-bla
                                max-mobile:text-[15.41px] max-mobile:leading-[21.58px]'>Alex Ca.</p>
                  <p className='font-[400] text-[22.76px] leading-[34.14px] text-[#64748B]
                                max-mobile:text-[12.52px] max-mobile:leading-[18.78px]'>By Alex</p>
                </div>
              </div>
              <div className='w-[62%] h-[34px] flex flex-row justify-between
                              max-mobile:w-[63.27px] max-mobile:h-[49.71px] max-mobile:flex-col max-mobile:items-end'>
                <div className='w-[105.02px] h-[34px] flex flex-row justify-between items-center
                                max-mobile:w-[63.27px] max-mobile:h-[22px] max-mobile:gap-[1.93px]'>
                  <div className='w-[31.52px] h-[31.52px] flex justify-center items-center
                                    max-mobile:w-[17.34px] max-mobile:h-[17.34px]'>
                      <div className='w-[16.41px] h-[26.92px] bg-top_collection_eth
                                      max-mobile:w-[9.03px] max-mobile:h-[14.81px]'></div>
                  </div>
                  <p className='font-[600] text-[24.51px] leading-[34.32px] text-bla
                                  max-mobile:text-[15.41px] max-mobile:leading-[21.58px]'>4,780</p>
                </div>
                <p className='font-[500] text-[24.51px] leading-[31.87px] text-[#10C352]
                              max-mobile:font-[400] max-mobile:text-[13.49px] max-mobile:leading-[20.23px]'>+ 27.78%</p>
                <div className='max-mobile:hidden mr-[8%]'>
                  <div className='w-[72.02px] flex flex-row justify-between items-center'>
                    <div className='w-[31.52px] h-[31.52px] flex justify-center items-center'>
                      <div className='w-[16.41px] h-[26.92px] bg-top_collection_eth'></div>
                    </div>
                    <p className='font-[600] text-[24.51px] leading-[34.32px] text-bla'>7,9</p>
                  </div>
                </div>
                <p className='max-mobile:hidden font-[500] text-[23.65px] leading-[30.75px] text-[#010101] mr-[8%]'>3.4К</p>
                <p className='max-mobile:hidden font-[500] text-[23.65px] leading-[30.75px] text-[#010101]'>900</p>
              </div>
            </div>
            <div className='h-[1.7px] bg-[#EBE9E9] mt-[2%]
                            max-mobile:h-[1px]'></div>
          </div>
          {/*End - User 4*/}
          {/*End - Users*/}
          <div className='w-[120.79px] h-[40px] ml-[90%] mt-[6%] flex flex-row justify-between items-center
                          max-mobile:w-[84px] max-mobile:h-[28px] max-mobile:ml-[40%] max-mobile:mt-[10%]'>
            <p className='font-[500] text-[17.67px] leading-[39.92px] text-[#ACADB9]
                          max-mobile:text-[12.29px] max-mobile:leading-[27.76px]'>Explore All</p>
            <div className='w-[13.96] h-[13.96px] flex flex-row relative
                            max-mobile:w-[9.71px] max-mobile:h-[9.71px]'>
              <div className='w-[13.96px] h-[2.2px] top-[5.9px] absolute bg-top_collection_strelka_2
                              max-mobile:w-[9.71px] max-mobile:h-[1.39px] max-mobile:top-[4.5px]'></div>
              <div className='w-[7.5px] h-[13.96px] left-[6.98px] absolute bg-top_collection_strelka_1
                              max-mobile:w-[4.86px] max-mobile:h-[9.71px] max-mobile:left-[4.85px]'></div>
            </div>
          </div>
        </div>
        {/*End - TOP COLLECTION*/}
        {/*Start - EXPLORE*/}
        <div className='mt-[100px] ml-[96px] mr-[96px] flex flex-col items-center
                        max-mobile:w-[289.62px] max-mobile:h-[2024px] max-mobile:mt-[100px] max-mobile:ml-[43px]'>
          <p className='font-[600] text-[45px] leading-[26.92px]
                        max-mobile:text-[30px] max-mobile:leading-[37.5px] max-mobile:break-word'>Explore <br className='min-mobile:hidden' /> Marketplace</p>
          <div className='w-[42%] mt-[65px] flex flex-row justify-between
                          max-mobile:w-[289.62px] max-mobile:h-[37px] max-mobile:ml-[0] max-mobile:mt-[30px]'>
            <button className='max-mobile:hidden min-w-[72px] h-[56px] rounded-[13.26px] border-[2.21px] border-bla flex justify-center items-center'>
              <p className='font-[600] text-[15.47px] leading-[23.21px] text-[#1A202C]'>All</p>
            </button>
            <button className='min-w-[137.04px] h-[56.2px] rounded-[13.26px] border-[2.21px] border-bla justify-center items-center flex flex-row
                               max-mobile:w-[87.85px] max-mobile:h-[36.02px] max-mobile:rounded-[8.5px] max-mobile:border-[1.42px]'>
              <div className='w-[25.19px] h-[25.19px] flex justify-center items-center
                              max-mobile:w-[16.15px] max-mobile:-[16.15px]'>
                <div className='w-[16.67px] h-[20.99px] bg-explore_list
                                max-mobile:w-[10.68px] max-mobile:h-[13.45px]'></div>
              </div>
              <p className='font-[600] text-[15.47px] leading-[23.21px] text-[#1A202C]
                            max-mobile:text-[9.92px] max-mobile:leading-[14.88px]'>Category</p>
            </button>
            <button className='min-w-[145.88px] h-[56.2px] rounded-[13.26px] border-[2.21px] border-bla flex flex-row justify-center items-center
                               max-mobile:w-[93.52px] max-mobile:h-[36.02px] max-mobile:rounded-[8.5px] max-mobile:border-[1.42px]'>
              <div className='w-[25.19px] h-[25.19px] flex justify-center items-center
                              max-mobile:w-[16.15px] max-mobile:h-[16.15px]'>
                <div className='w-[20.99px] h-[20.99px] bg-explore_collection
                                max-mobile:w-[13.45px] max-mobile:h-[13.45px]'></div>
              </div>
              <p className='font-[600] text-[15.47px] leading-[23.21px] text-[#1A202C]
                            max-mobile:text-[9.92px] max-mobile:leading-[14.88px]'>Collection</p>
            </button>
            <button className='min-w-[124.88px] h-[57.72px] rounded-[13.26px] border-[2.21px] border-bla flex flex-row justify-center items-center
                               max-mobile:w-[80.05px] max-mobile:h-[37px] max-mobile:rounded-[8.5px] max-mobile:border-[1.42px]'>
              <div className='w-[25.19px] h-[25.19px] bg-explore_dollar
                              max-mobile:w-[16.15px] max-mobile:h-[16.15px]'></div>
              <p className='font-[600] text-[15.47px] leading-[23.21px] text-[#1A202C]
                            max-mobile:text-[9.92px] max-mobile:leading-[14.88px]'>Price</p>
            </button>
          </div>
          {/*Start - First Row of Cards*/}
          <div className='w-[100%] h-[403.56px] mt-[100.28px] flex flex-row justify-between
                          max-mobile:w-[100%] max-mobile:h-[1728px] max-mobile:mt-[75px] max-mobile:flex-col'>
              {/*Start - Card 1*/}
              <div className='min-w-[281.13px] h-[402.28px] pt-[14.11px] bg-whi rounded-[23.48px] shadow-[38.82px_11.76px_58.81px_0_rgba(199,199,199,0.6)]'>
                <div className='w-[252.9px] h-[252.9px] ml-[14.12px] pt-[14.12px] rounded-[18.82px] bg-weekly_card_1'>
                  <div className='bg-[#1C1D20]/35 w-[116.58px] h-[37.64px] ml-[127.04px] rounded-[9.41px] border-[1.18px] border-[#1C1D20]/8 blur-[4.71] shadow-[0_4.71px_14.12px_0_rgba(28, 29, 32, 0.08)] flex justify-center items-center'>
                    <p className='font-[500] text-[14.12px] leading-[21.17px] text-whi'>07h 09m 12s</p>
                  </div>
                </div>
                <div className='w-[243.49px] h-[95.95px] mt-[18.82px] ml-[18.82px] flex flex-col justify-between'>
                  <p className='font-[600] text-[21.17px] leading-[29.64px] text-bla'>Sun-Glass</p>
                  <div className='w-[243.49px] h-[51.76px] flex flex-row justify-between'>
                    <div className='w-[121.74px] h-[50.71px] gap-[4.71px] flex flex-col'>
                      <p className='font-[400] text-[14.12px] leading-[21.17px] text-[#94A3B8]'>Current bid</p>
                      <div className='w-[53.53px] h-[25px] gap-[2.35px] flex flex-row justify-between itemc-center'>
                        <div className='w-[21.17px] h-[21.17px] flex justify-center items-center'>
                          <div className='w-[11.03px] h-[18.09px] bg-weekly_eth'></div>
                        </div>
                        <p className='font-[500] text-[16.47px] leading-[24.7px]'>1.75</p>
                      </div>
                    </div>
                    <button className='w-[121.74px] h-[51.76px] bg-bla rounded-[11.76px] gap-[11.76px] flex justify-center items-center'>
                      <p className='font-[600] text-[14.12px] leading-[21.17px] text-whi'>PLACE BID</p>
                    </button>
                  </div>
                </div>
              </div>
              {/*End - Card 1*/}
              {/*Start - Card 2*/}
              <div className='min-w-[281.13px] h-[402.28px] pt-[14.11px] bg-whi rounded-[23.48px] shadow-[38.82px_11.76px_58.81px_0_rgba(199,199,199,0.6)]'>
                <div className='w-[252.9px] h-[252.9px] ml-[14.12px] pt-[14.12px] rounded-[18.82px] bg-weekly_card_2'>
                  <div className='bg-[#1C1D20]/35 w-[116.58px] h-[37.64px] ml-[127.04px] rounded-[9.41px] border-[1.18px] border-[#1C1D20]/8 blur-[4.71] shadow-[0_4.71px_14.12px_0_rgba(28, 29, 32, 0.08)] flex justify-center items-center'>
                    <p className='font-[500] text-[14.12px] leading-[21.17px] text-whi'>07h 09m 12s</p>
                  </div>
                </div>
                <div className='w-[243.49px] h-[95.95px] mt-[18.82px] ml-[18.82px] flex flex-col justify-between'>
                  <p className='font-[600] text-[21.17px] leading-[29.64px] text-bla'>Sun-Glass</p>
                  <div className='w-[243.49px] h-[51.76px] flex flex-row justify-between'>
                    <div className='w-[121.74px] h-[50.71px] gap-[4.71px] flex flex-col'>
                      <p className='font-[400] text-[14.12px] leading-[21.17px] text-[#94A3B8]'>Current bid</p>
                      <div className='w-[53.53px] h-[25px] gap-[2.35px] flex flex-row justify-between itemc-center'>
                        <div className='w-[21.17px] h-[21.17px] flex justify-center items-center'>
                          <div className='w-[11.03px] h-[18.09px] bg-weekly_eth'></div>
                        </div>
                        <p className='font-[500] text-[16.47px] leading-[24.7px]'>1.75</p>
                      </div>
                    </div>
                    <button className='w-[121.74px] h-[51.76px] bg-bla rounded-[11.76px] gap-[11.76px] flex justify-center items-center'>
                      <p className='font-[600] text-[14.12px] leading-[21.17px] text-whi'>PLACE BID</p>
                    </button>
                  </div>
                </div>
              </div>
              {/*End - Card 2*/}
              {/*Start - Card 3*/}
              <div className='min-w-[281.13px] h-[402.28px] pt-[14.11px] bg-whi rounded-[23.48px] shadow-[38.82px_11.76px_58.81px_0_rgba(199,199,199,0.6)]'>
                <div className='w-[252.9px] h-[252.9px] ml-[14.12px] pt-[14.12px] rounded-[18.82px] bg-weekly_card_3'>
                  <div className='bg-[#1C1D20]/35 w-[116.58px] h-[37.64px] ml-[127.04px] rounded-[9.41px] border-[1.18px] border-[#1C1D20]/8 blur-[4.71] shadow-[0_4.71px_14.12px_0_rgba(28, 29, 32, 0.08)] flex justify-center items-center'>
                    <p className='font-[500] text-[14.12px] leading-[21.17px] text-whi'>07h 09m 12s</p>
                  </div>
                </div>
                <div className='w-[243.49px] h-[95.95px] mt-[18.82px] ml-[18.82px] flex flex-col justify-between'>
                  <p className='font-[600] text-[21.17px] leading-[29.64px] text-bla'>Sun-Glass</p>
                  <div className='w-[243.49px] h-[51.76px] flex flex-row justify-between'>
                    <div className='w-[121.74px] h-[50.71px] gap-[4.71px] flex flex-col'>
                      <p className='font-[400] text-[14.12px] leading-[21.17px] text-[#94A3B8]'>Current bid</p>
                      <div className='w-[53.53px] h-[25px] gap-[2.35px] flex flex-row justify-between itemc-center'>
                        <div className='w-[21.17px] h-[21.17px] flex justify-center items-center'>
                          <div className='w-[11.03px] h-[18.09px] bg-weekly_eth'></div>
                        </div>
                        <p className='font-[500] text-[16.47px] leading-[24.7px]'>1.75</p>
                      </div>
                    </div>
                    <button className='w-[121.74px] h-[51.76px] bg-bla rounded-[11.76px] gap-[11.76px] flex justify-center items-center'>
                      <p className='font-[600] text-[14.12px] leading-[21.17px] text-whi'>PLACE BID</p>
                    </button>
                  </div>
                </div>
              </div>
              {/*End - Card 3*/}
              {/*Start - Card 4*/}
              <div className='min-w-[281.13px] h-[402.28px] pt-[14.11px] bg-whi rounded-[23.48px] shadow-[38.82px_11.76px_58.81px_0_rgba(199,199,199,0.6)]'>
                <div className='w-[252.9px] h-[252.9px] ml-[14.12px] pt-[14.12px] rounded-[18.82px] bg-weekly_card_4'>
                  <div className='bg-[#1C1D20]/35 w-[116.58px] h-[37.64px] ml-[127.04px] rounded-[9.41px] border-[1.18px] border-[#1C1D20]/8 blur-[4.71] shadow-[0_4.71px_14.12px_0_rgba(28, 29, 32, 0.08)] flex justify-center items-center'>
                    <p className='font-[500] text-[14.12px] leading-[21.17px] text-whi'>19h 09m 12s</p>
                  </div>
                </div>
                <div className='w-[243.49px] h-[95.95px] mt-[18.82px] ml-[18.82px] flex flex-col justify-between'>
                  <p className='font-[600] text-[21.17px] leading-[29.64px] text-bla'>NuEvey</p>
                  <div className='w-[243.49px] h-[51.76px] flex flex-row justify-between'>
                    <div className='w-[121.74px] h-[50.71px] gap-[4.71px] flex flex-col'>
                      <p className='w-[81px] h-[21px] font-[400] text-[14.12px] leading-[21.17px] text-[#94A3B8]'>Current bid</p>
                      <div className='w-[53.53px] h-[25px] gap-[2.35px] flex flex-row justify-between itemc-center'>
                        <div className='w-[21.17px] h-[21.17px] flex justify-center items-center'>
                          <div className='w-[11.03px] h-[18.09px] bg-weekly_eth'></div>
                        </div>
                        <p className='font-[500] text-[16.47px] leading-[24.7px]'>1.25</p>
                      </div>
                    </div>
                    <button className='w-[121.74px] h-[51.76px] bg-bla rounded-[11.76px] gap-[11.76px] flex justify-center items-center'>
                      <p className='font-[600] text-[14.12px] leading-[21.17px] text-whi'>PLACE BID</p>
                    </button>
                  </div>
                </div>
              </div>
              {/*End - Card 4*/}
          </div>
          {/*End - First Row of Cards*/}
          {/*Start - Second Row of Cards*/}
          <div className='w-[100%]  h-[403.56px] mt-[100.28px] flex flex-row-reverse justify-between max-mobile:hidden'>
              {/*Start - Card 1*/}
              <div className='min-w-[281.13px] h-[402.28px] pt-[14.11px] bg-whi rounded-[23.48px] shadow-[38.82px_11.76px_58.81px_0_rgba(199,199,199,0.6)]'>
                <div className='w-[252.9px] h-[252.9px] ml-[14.12px] pt-[14.12px] rounded-[18.82px] bg-weekly_card_1'>
                  <div className='bg-[#1C1D20]/35 w-[116.58px] h-[37.64px] ml-[127.04px] rounded-[9.41px] border-[1.18px] border-[#1C1D20]/8 blur-[4.71] shadow-[0_4.71px_14.12px_0_rgba(28, 29, 32, 0.08)] flex justify-center items-center'>
                    <p className='font-[500] text-[14.12px] leading-[21.17px] text-whi'>07h 09m 12s</p>
                  </div>
                </div>
                <div className='w-[243.49px] h-[95.95px] mt-[18.82px] ml-[18.82px] flex flex-col justify-between'>
                  <p className='font-[600] text-[21.17px] leading-[29.64px] text-bla'>Sun-Glass</p>
                  <div className='w-[243.49px] h-[51.76px] flex flex-row justify-between'>
                    <div className='w-[121.74px] h-[50.71px] gap-[4.71px] flex flex-col'>
                      <p className='font-[400] text-[14.12px] leading-[21.17px] text-[#94A3B8]'>Current bid</p>
                      <div className='w-[53.53px] h-[25px] gap-[2.35px] flex flex-row justify-between itemc-center'>
                        <div className='w-[21.17px] h-[21.17px] flex justify-center items-center'>
                          <div className='w-[11.03px] h-[18.09px] bg-weekly_eth'></div>
                        </div>
                        <p className='font-[500] text-[16.47px] leading-[24.7px]'>1.75</p>
                      </div>
                    </div>
                    <button className='w-[121.74px] h-[51.76px] bg-bla rounded-[11.76px] gap-[11.76px] flex justify-center items-center'>
                      <p className='font-[600] text-[14.12px] leading-[21.17px] text-whi'>PLACE BID</p>
                    </button>
                  </div>
                </div>
              </div>
              {/*End - Card 1*/}
              {/*Start - Card 2*/}
              <div className='min-w-[281.13px] h-[402.28px] pt-[14.11px] bg-whi rounded-[23.48px] shadow-[38.82px_11.76px_58.81px_0_rgba(199,199,199,0.6)]'>
                <div className='w-[252.9px] h-[252.9px] ml-[14.12px] pt-[14.12px] rounded-[18.82px] bg-weekly_card_2'>
                  <div className='bg-[#1C1D20]/35 w-[116.58px] h-[37.64px] ml-[127.04px] rounded-[9.41px] border-[1.18px] border-[#1C1D20]/8 blur-[4.71] shadow-[0_4.71px_14.12px_0_rgba(28, 29, 32, 0.08)] flex justify-center items-center'>
                    <p className='font-[500] text-[14.12px] leading-[21.17px] text-whi'>07h 09m 12s</p>
                  </div>
                </div>
                <div className='w-[243.49px] h-[95.95px] mt-[18.82px] ml-[18.82px] flex flex-col justify-between'>
                  <p className='font-[600] text-[21.17px] leading-[29.64px] text-bla'>Sun-Glass</p>
                  <div className='w-[243.49px] h-[51.76px] flex flex-row justify-between'>
                    <div className='w-[121.74px] h-[50.71px] gap-[4.71px] flex flex-col'>
                      <p className='font-[400] text-[14.12px] leading-[21.17px] text-[#94A3B8]'>Current bid</p>
                      <div className='w-[53.53px] h-[25px] gap-[2.35px] flex flex-row justify-between itemc-center'>
                        <div className='w-[21.17px] h-[21.17px] flex justify-center items-center'>
                          <div className='w-[11.03px] h-[18.09px] bg-weekly_eth'></div>
                        </div>
                        <p className='font-[500] text-[16.47px] leading-[24.7px]'>1.75</p>
                      </div>
                    </div>
                    <button className='w-[121.74px] h-[51.76px] bg-bla rounded-[11.76px] gap-[11.76px] flex justify-center items-center'>
                      <p className='font-[600] text-[14.12px] leading-[21.17px] text-whi'>PLACE BID</p>
                    </button>
                  </div>
                </div>
              </div>
              {/*End - Card 2*/}
              {/*Start - Card 3*/}
              <div className='min-w-[281.13px] h-[402.28px] pt-[14.11px] bg-whi rounded-[23.48px] shadow-[38.82px_11.76px_58.81px_0_rgba(199,199,199,0.6)]'>
                <div className='w-[252.9px] h-[252.9px] ml-[14.12px] pt-[14.12px] rounded-[18.82px] bg-weekly_card_4'>
                  <div className='bg-[#1C1D20]/35 w-[116.58px] h-[37.64px] ml-[127.04px] rounded-[9.41px] border-[1.18px] border-[#1C1D20]/8 blur-[4.71] shadow-[0_4.71px_14.12px_0_rgba(28, 29, 32, 0.08)] flex justify-center items-center'>
                    <p className='font-[500] text-[14.12px] leading-[21.17px] text-whi'>19h 09m 12s</p>
                  </div>
                </div>
                <div className='w-[243.49px] h-[95.95px] mt-[18.82px] ml-[18.82px] flex flex-col justify-between'>
                  <p className='font-[600] text-[21.17px] leading-[29.64px] text-bla'>NuEvey</p>
                  <div className='w-[243.49px] h-[51.76px] flex flex-row justify-between'>
                    <div className='w-[121.74px] h-[50.71px] gap-[4.71px] flex flex-col'>
                      <p className='font-[400] text-[14.12px] leading-[21.17px] text-[#94A3B8]'>Current bid</p>
                      <div className='w-[53.53px] h-[25px] gap-[2.35px] flex flex-row justify-between itemc-center'>
                        <div className='w-[21.17px] h-[21.17px] flex justify-center items-center'>
                          <div className='w-[11.03px] h-[18.09px] bg-weekly_eth'></div>
                        </div>
                        <p className='font-[500] text-[16.47px] leading-[24.7px]'>1.25</p>
                      </div>
                    </div>
                    <button className='w-[121.74px] h-[51.76px] bg-bla rounded-[11.76px] gap-[11.76px] flex justify-center items-center'>
                      <p className='font-[600] text-[14.12px] leading-[21.17px] text-whi'>PLACE BID</p>
                    </button>
                  </div>
                </div>
              </div>
              {/*End - Card 3*/}
              {/*Start - Card 4*/}
              <div className='min-w-[281.13px] h-[402.28px] pt-[14.11px] bg-whi rounded-[23.48px] shadow-[38.82px_11.76px_58.81px_0_rgba(199,199,199,0.6)]'>
                <div className='w-[252.9px] h-[252.9px] ml-[14.12px] pt-[14.12px] rounded-[18.82px] bg-weekly_card_3'>
                  <div className='bg-[#1C1D20]/35 w-[116.58px] h-[37.64px] ml-[127.04px] rounded-[9.41px] border-[1.18px] border-[#1C1D20]/8 blur-[4.71] shadow-[0_4.71px_14.12px_0_rgba(28, 29, 32, 0.08)] flex justify-center items-center'>
                    <p className='font-[500] text-[14.12px] leading-[21.17px] text-whi'>07h 09m 12s</p>
                  </div>
                </div>
                <div className='w-[243.49px] h-[95.95px] mt-[18.82px] ml-[18.82px] flex flex-col justify-between'>
                  <p className='font-[600] text-[21.17px] leading-[29.64px] text-bla'>Sun-Glass</p>
                  <div className='w-[243.49px] h-[51.76px] flex flex-row justify-between'>
                    <div className='w-[121.74px] h-[50.71px] gap-[4.71px] flex flex-col'>
                      <p className='font-[400] text-[14.12px] leading-[21.17px] text-[#94A3B8]'>Current bid</p>
                      <div className='w-[53.53px] h-[25px] gap-[2.35px] flex flex-row justify-between itemc-center'>
                        <div className='w-[21.17px] h-[21.17px] flex justify-center items-center'>
                          <div className='w-[11.03px] h-[18.09px] bg-weekly_eth'></div>
                        </div>
                        <p className='font-[500] text-[16.47px] leading-[24.7px]'>1.75</p>
                      </div>
                    </div>
                    <button className='w-[121.74px] h-[51.76px] bg-bla rounded-[11.76px] gap-[11.76px] flex justify-center items-center'>
                      <p className='font-[600] text-[14.12px] leading-[21.17px] text-whi'>PLACE BID</p>
                    </button>
                  </div>
                </div>
              </div>
              {/*End - Card 4*/}
          </div>
          {/*End - Second Row of Cards*/}
          <div className='w-[120.79px] h-[40px] ml-[90%] mt-[70px] flex flex-row justify-between items-center
                          max-mobile:w-[84px] max-mobile:h-[28px] max-mobile:ml-[102px] max-mobile:mt-[50px]'>
            <p className='font-[500] text-[17.67px] leading-[39.92px] text-[#ACADB9]
                          max-mobile:text-[12.29px] max-mobile:leading-[27.76px]'>Explore All</p>
            <div className='w-[13.96] h-[13.96px] flex flex-row relative
                            max-mobile:w-[9.71px] max-mobile:h-[9.71px]'>
              <div className='w-[13.96px] h-[2.2px] top-[5.9px] absolute bg-top_collection_strelka_2
                              max-mobile:w-[9.71px] max-mobile:h-[1.39px] top-[4.2px]'></div>
              <div className='w-[7.5px] h-[13.96px] left-[6.98px] absolute bg-top_collection_strelka_1
                              max-mobile:w-[4.86px] max-mobile:h-[9.71px] max-mobile:left-[4.85px]'></div>
            </div>
          </div>
        </div>
        {/*End - EXPLORE*/}
        {/*Start - UNLEASH*/}
        <div className='w-[1402.65px] h-[688.08px] flex flex-col justify-between ml-[96px] mt-[103px]
                        max-mobile:w-[400px] max-mobile:h-[545px] max-mobile:ml-[27] max-mobile:mt-[164px]'>
          <div className='w-[1248px] h-[0.71px] bg-[#CBCBCB] max-mobile:hidden'></div>
          <div className='w-[1402.65px] h-[613.08px] flex flex-row
                          max-mobile:w-[400px] max-mobile:h-[545px] max-mobile:flex-col'>
            {/*Start - Content*/}
            <div className='w-[461px] h-[535px] ml-[3px] mt-[41px]
                            max-mobile:w-auto max-mobile:h-auto max-mobile:mt-0'>
              <p className='font-[600] text-[45px] leading-[54.4px]
                            max-mobile:text-[30px] max-mobile:leading-[37.11px] max-mobile:w-[314.51px] max-mobile:text-center'>
                <span className='text-[#C5C5C5]'>Just Unleash - </span>
                <br />
                <span className='text-[#18181B]'>Your Inner Collector</span>
              </p>
              <div className='w-[297px] h-[252px] mt-[45px] flex flex-col justify-between max-mobile:hidden'>
                <div className='w-[250] h-[32px] flex flex-row items-center'>
                  <div className='w-[20px] h-[20px] bg-unleash_tick'></div>
                  <p className='ml-[12px] font-[400] text-[16px] leading-[32px] text-[#12141D]/70'>Best Seller All Around World</p>
                </div>
                <div className='w-[265px] h-[32px] flex flex-row items-center'>
                  <div className='w-[20px] h-[20px] bg-unleash_tick'></div>
                  <p className='ml-[12px] font-[400] text-[16px] leading-[32px] text-[#12141D]/70'>$2M+ Transections Every Day</p>
                </div>
                <div className='w-[195px] h-[32px] flex flex-row items-center'>
                  <div className='w-[20px] h-[20px] bg-unleash_tick'></div>
                  <p className='ml-[12px] font-[400] text-[16px] leading-[32px] text-[#12141D]/70'>Secure Transactions</p>
                </div>
                <div className='w-[297px] h-[32px] flex flex-row items-center'>
                  <div className='w-[20px] h-[20px] bg-unleash_tick'></div>
                  <p className='ml-[12px] font-[400] text-[16px] leading-[32px] text-[#12141D]/70'>Exclusive Collections From Sellers</p>
                </div>
                <div className='w-[220px] h-[32px] flex flex-row items-center'>
                  <div className='w-[20px] h-[20px] bg-unleash_tick'></div>
                  <p className='ml-[12px] font-[400] text-[16px] leading-[32px] text-[#12141D]/70'>Easy Buying and Selling</p>
                </div>
                <div className='w-[198px] h-[32px] flex flex-row items-center'>
                  <div className='w-[20px] h-[20px] bg-unleash_tick'></div>
                  <p className='ml-[12px] font-[400] text-[16px] leading-[32px] text-[#12141D]/70'>Join Our Community</p>
                </div>
              </div>
              <button className='w-[164px] h-[59px] rounded-[11.99px] bg-[#000000] flex justify-center items-center mt-[70px] max-mobile:hidden'>
                <div className='w-[128.51px] h-[22.14px] flex flex-row items-center justify-between'>
                  <p className='w-[95px] h-[19px] text-whi font-[500] text-[14.76px] leading-[18.45px]'>Explore More</p>
                  <div className='w-[22.14px] h-[22.14px] bg-unleash_arrow'></div>
                </div>
              </button>
            </div>
            {/*End - Content*/}
            {/*Start - Illustration*/}
            <div className='w-[836.65px] h-[613.08px] ml-[102px] relative
                            max-mobile:w-[400px] max-mobile:h-[293.11px] max-mobile:ml-0 max-mobile:mt-[50px]'>
              {/*Start - Background Block*/}
              <div className='w-[399.65px] h-[173px] bg-unleash_points absolute top-[410px] left-[437px]
                              max-mobile:w-[191.07px] max-mobile:h-[82.71px] max-mobile:top-[196.02px] max-mobile:left-[208.93px]'></div>
              {/*End - Background Block*/}
              {/*Start - Block 1*/}
              <div className='w-[322.1px] h-[510.06px] rounded-[14.12px] bg-whi absolute shadow-[8.82px_8.82px_44.12px_0_rgba(20,20,22,0.1) left-[179px] top-[38.21px] flex flex-col
              max-mobile:w-[153.99px] max-mobile:h-[243.99px] max-mobile:rounded-[6.75px] max-mobile:shadow-[4.22px_4.22px_21.1px_0_rgba(20,20,22,0.1)] max-mobile:left-[85.58px] max-mobile:top-[18.27px]'>
                <div className='w-[322.1px h-[51.47px] flex flex-row
                                max-mobile:w-[153.99px] max-mobile:h-[24.66px]'>
                  <p className='font-[600] text-[18.53px] text-[#1A202C] ml-[21.18px] mt-[26.47px] leading-[25.02px]
                                max-mobile:text-[8.86px] max-mobile:ml-[10.13px] max-mobile:mt-[12.66px] max-mobile:leading-[11.96px]'>Best Sellers</p>
                  <div className='w-[21.18px] h-[21.18px] flex justify-center items-center mt-[28.24px] ml-[148.56px]
                                  max-mobile:w-[10.12px] max-mobile:h-[10.12px] max-mobile:mt-[13.5px] max-mobile:ml-[70.62px]'>
                    <div className='w-[14.12px] h-[1.76px] bg-points_3
                                    max-mobile:w-[6.75px] max-mobile:h-[0.84px]'></div>
                  </div>
                </div>
                <div className='w-[284.7px] h-[409.33px] mt-[23.54px] ml-[17.31px] flex flex-col justify-between
                                max-mobile:w-[136.11px] max-mobile:h-[195.69px] max-mobile:mt-[11.2px] max-mobile:ml-[8.28px]'>
                  <div className='w-[284.7px] h-[55.72px] gap-[17.46px] flex flex-row items-center justify-between
                                  max-mobile:w-[136.11px] max-mobile:h-[26.63px] max-mobile:gap-[8.35px]'>
                    <div className='w-[163.68px] h-[55.72px] gap-[10.45px] flex flex-row items-center justify-between
                                    max-mobile:w-[78.22px] max-mobile:h-[26.63px] max-mobile:gap-[4.99px]'>
                      <div className='w-[55.72px] h-[55.72px] relative
                                      max-mobile:w-[26.63px] max-mobile:h-[26.63px]'>
                        <div className='w-[48.76px] h-[48.76px] rounded-[41.79px] bg-image_2 absolute top-[3.48px] left-[3.48px]
                                        max-mobile:w-[23.3px] max-mobile:h-[23.3px] max-mobile:rounded-[19.97px] max-mobile:top-[1.66px] max-mobile:left-[1.66px]'></div>
                        <div className='w-[20.9px] h-[20.9px] rounded-[100%] bg-[#23262F] absolute left-[34.83px] flex justify-center items-center
                                        max-mobile:w-[9.99px] max-mobile:h-[9.99px] max-mobile:left-[16.64px]'>
                          <p className='font-[600] text-[10.45px] leading-[17.41px] text-whi
                                        max-mobile:text-[4.99px] max-mobile:leading-[8.32px]'>1</p>
                        </div>
                      </div>
                      <div className='w-[97.51px] h-[39px] flex flex-col justify-between
                                      max-mobile:w-[46.6px] max-mobile:h-[19px]'>
                        <p className='font-[500] text-[12.19px] leading-[20.9px] text-[#23262F]
                                      max-mobile:text-[5.83px] max-mobile:leading-[9.99px]'>Alex Ca.</p>
                        <p className='font-[400] text-[10.45px] leading-[17.41px] text-[#777E90]
                                      max-mobile:text-[5.83px] max-mobile:leading-[9.99px]'>@Alexy</p>
                      </div>
                    </div>
                    <button className='w-[65.86px] h-[27.93px] rounded-[6.97px] border-[1.74px] border-[#E6E8EC] gap-[10.45px]
                                       max-mobile:w-[32.31px] max-mobile:h-[13.66px] max-mobile:rounded-[3.33px] max-mobile:border-[0.83px] max-mobile:gap-[4.99px]'>
                      <p className='font-[700] text-[12.19px] leading-[13.93px] text-[#23262F]
                                    max-mobile:text-[5.83px] max-mobile:leading-[6.66px]'>Follow</p>
                    </button>
                  </div>
                  <div className='w-[284.7px] h-[55.72px] gap-[17.46px] flex flex-row items-center justify-between
                                  max-mobile:w-[136.11px] max-mobile:h-[26.63px] max-mobile:gap-[8.35px]'>
                    <div className='w-[163.68px] h-[55.72px] gap-[10.45px] flex flex-row items-center justify-between
                                    max-mobile:w-[78.22px] max-mobile:h-[26.63px] max-mobile:gap-[4.99px]'>
                      <div className='w-[55.72px] h-[55.72px] relative
                                      max-mobile:w-[26.63px] max-mobile:h-[26.63px]'>
                        <div className='w-[48.76px] h-[48.76px] rounded-[41.79px] bg-weekly_card_5 absolute top-[3.48px] left-[3.48px]
                                        max-mobile:w-[23.3px] max-mobile:h-[23.3px] max-mobile:rounded-[19.97px] max-mobile:top-[1.66px] max-mobile:left-[1.66px]'></div>
                        <div className='w-[20.9px] h-[20.9px] rounded-[100%] bg-[#23262F] absolute left-[34.83px] flex justify-center items-center
                                        max-mobile:w-[9.99px] max-mobile:h-[9.99px] max-mobile:left-[16.64px]'>
                          <p className='font-[600] text-[10.45px] leading-[17.41px] text-whi
                                        max-mobile:text-[4.99px] max-mobile:leading-[8.32px]'>2</p>
                        </div>
                      </div>
                      <div className='w-[97.51px] h-[39px] flex flex-col justify-between
                                      max-mobile:w-[46.6px] max-mobile:h-[19px]'>
                        <p className='font-[500] text-[12.19px] leading-[20.9px] text-[#23262F]
                                      max-mobile:text-[5.83px] max-mobile:leading-[9.99px]'>Juliya Sa.</p>
                        <p className='font-[400] text-[10.45px] leading-[17.41px] text-[#777E90]
                                      max-mobile:text-[5.83px] max-mobile:leading-[9.99px]'>@JuliyaS</p>
                      </div>
                    </div>
                    <button className='w-[65.86px] h-[27.93px] rounded-[6.97px] border-[1.74px] border-[#E6E8EC] gap-[10.45px]
                                       max-mobile:w-[32.31px] max-mobile:h-[13.66px] max-mobile:rounded-[3.33px] max-mobile:border-[0.83px] max-mobile:gap-[4.99px]'>
                      <p className='font-[700] text-[12.19px] leading-[13.93px] text-[#23262F]
                                    max-mobile:text-[5.83px] max-mobile:leading-[6.66px]'>Follow</p>
                    </button>
                  </div>
                  <div className='w-[284.7px] h-[55.72px] gap-[17.46px] flex flex-row items-center justify-between
                                  max-mobile:w-[136.11px] max-mobile:h-[26.63px] max-mobile:gap-[8.35px]'>
                    <div className='w-[163.68px] h-[55.72px] gap-[10.45px] flex flex-row items-center justify-between
                                    max-mobile:w-[78.22px] max-mobile:h-[26.63px] max-mobile:gap-[4.99px]'>
                      <div className='w-[55.72px] h-[55.72px] relative
                                      max-mobile:w-[26.63px] max-mobile:h-[26.63px]'>
                        <div className='w-[48.76px] h-[48.76px] rounded-[41.79px] bg-image_1 absolute top-[3.48px] left-[3.48px]
                                        max-mobile:w-[23.3px] max-mobile:h-[23.3px] max-mobile:rounded-[19.97px] max-mobile:top-[1.66px] max-mobile:left-[1.66px]'></div>
                        <div className='w-[20.9px] h-[20.9px] rounded-[100%] bg-[#23262F] absolute left-[34.83px] flex justify-center items-center
                                        max-mobile:w-[9.99px] max-mobile:h-[9.99px] max-mobile:left-[16.64px]'>
                          <p className='font-[600] text-[10.45px] leading-[17.41px] text-whi
                                        max-mobile:text-[4.99px] max-mobile:leading-[8.32px]'>2</p>
                        </div>
                      </div>
                      <div className='w-[97.51px] h-[39px] flex flex-col justify-between
                                      max-mobile:w-[46.6px] max-mobile:h-[19px]'>
                        <p className='font-[500] text-[12.19px] leading-[20.9px] text-[#23262F]
                                      max-mobile:text-[5.83px] max-mobile:leading-[9.99px]'>Juliya Sa.</p>
                        <p className='font-[400] text-[10.45px] leading-[17.41px] text-[#777E90]
                                      max-mobile:text-[5.83px] max-mobile:leading-[9.99px]'>@JuliyaS</p>
                      </div>
                    </div>
                    <button className='w-[65.86px] h-[27.93px] rounded-[6.97px] border-[1.74px] border-[#E6E8EC] gap-[10.45px]
                                       max-mobile:w-[32.31px] max-mobile:h-[13.66px] max-mobile:rounded-[3.33px] max-mobile:border-[0.83px] max-mobile:gap-[4.99px]'>
                      <p className='font-[700] text-[12.19px] leading-[13.93px] text-[#23262F]
                                    max-mobile:text-[5.83px] max-mobile:leading-[6.66px]'>Follow</p>
                    </button>
                  </div>
                  <div className='w-[284.7px] h-[55.72px] gap-[17.46px] flex flex-row items-center justify-between
                                  max-mobile:w-[136.11px] max-mobile:h-[26.63px] max-mobile:gap-[8.35px]'>
                    <div className='w-[163.68px] h-[55.72px] gap-[10.45px] flex flex-row items-center justify-between
                                    max-mobile:w-[78.22px] max-mobile:h-[26.63px] max-mobile:gap-[4.99px]'>
                      <div className='w-[55.72px] h-[55.72px] relative
                                      max-mobile:w-[26.63px] max-mobile:h-[26.63px]'>
                        <div className='w-[48.76px] h-[48.76px] rounded-[41.79px] bg-weekly_card_3 absolute top-[3.48px] left-[3.48px]
                                        max-mobile:w-[23.3px] max-mobile:h-[23.3px] max-mobile:rounded-[19.97px] max-mobile:top-[1.66px] max-mobile:left-[1.66px]'></div>
                        <div className='w-[20.9px] h-[20.9px] rounded-[100%] bg-[#23262F] absolute left-[34.83px] flex justify-center items-center
                                        max-mobile:w-[9.99px] max-mobile:h-[9.99px] max-mobile:left-[16.64px]'>
                          <p className='font-[600] text-[10.45px] leading-[17.41px] text-whi
                                        max-mobile:text-[4.99px] max-mobile:leading-[8.32px]'>3</p>
                        </div>
                      </div>
                      <div className='w-[97.51px] h-[39px] flex flex-col justify-between
                                      max-mobile:w-[46.6px] max-mobile:h-[19px]'>
                        <p className='font-[500] text-[12.19px] leading-[20.9px] text-[#23262F]
                                      max-mobile:text-[5.83px] max-mobile:leading-[9.99px]'>Trevor Pu.</p>
                        <p className='font-[400] text-[10.45px] leading-[17.41px] text-[#777E90]
                                      max-mobile:text-[5.83px] max-mobile:leading-[9.99px]'>@TrevorP</p>
                      </div>
                    </div>
                    <button className='w-[79.86px] h-[27.93px] rounded-[6.97px] border-[1.74px] border-[#E6E8EC] bg-[#E6E8EC] gap-[10.45px]
                                       max-mobile:w-[39.31px] max-mobile:h-[13.66px] max-mobile:rounded-[3.33px] max-mobile:border-[0.83px] max-mobile:gap-[4.99px]'>
                      <p className='font-[700] text-[12.19px] leading-[13.93px] text-[#23262F]
                                    max-mobile:text-[5.83px] leading-[6.66px]'>Unfollow</p>
                    </button>
                  </div>
                  <div className='w-[284.7px] h-[55.72px] gap-[17.46px] flex flex-row items-center justify-between
                                  max-mobile:w-[136.11px] max-mobile:h-[26.63px] max-mobile:gap-[8.35px]'>
                    <div className='w-[163.68px] h-[55.72px] gap-[10.45px] flex flex-row items-center justify-between
                                    max-mobile:w-[78.22px] max-mobile:h-[26.63px] max-mobile:gap-[4.99px]'>
                      <div className='w-[55.72px] h-[55.72px] relative
                                      max-mobile:w-[26.63px] max-mobile:h-[26.63px]'>
                        <div className='w-[48.76px] h-[48.76px] rounded-[41.79px] bg-unleash_verified_image_2 absolute top-[3.48px] left-[3.48px]
                                        max-mobile:w-[23.3px] max-mobile:h-[23.3px] max-mobile:rounded-[19.97px] max-mobile:top-[1.66px] max-mobile:left-[1.66px]'></div>
                        <div className='w-[20.9px] h-[20.9px] rounded-[100%] bg-[#23262F] absolute left-[34.83px] flex justify-center items-center
                                        max-mobile:w-[9.99px] max-mobile:h-[9.99px] max-mobile:left-[16.64px]'>
                          <p className='font-[600] text-[10.45px] leading-[17.41px] text-whi
                                        max-mobile:text-[4.99px] max-mobile:leading-[8.32px]'>1</p>
                        </div>
                      </div>
                      <div className='w-[97.51px] h-[39px] flex flex-col justify-between
                                      max-mobile:w-[46.6px] max-mobile:h-[19px]'>
                        <p className='font-[500] text-[12.19px] leading-[20.9px] text-[#23262F]
                                      max-mobile:text-[5.83px] max-mobile:leading-[9.99px]'>Juliya Sa.</p>
                        <p className='font-[400] text-[10.45px] leading-[17.41px] text-[#777E90]
                                      max-mobile:text-[5.83px] max-mobile:leading-[9.99px]'>@JuliyaS</p>
                      </div>
                    </div>
                    <button className='w-[65.86px] h-[27.93px] rounded-[6.97px] border-[1.74px] border-[#E6E8EC] gap-[10.45px]
                                       max-mobile:w-[32.31px] max-mobile:h-[13.66px] max-mobile:rounded-[3.33px] max-mobile:border-[0.83px] max-mobile:gap-[4.99px]'>
                      <p className='font-[700] text-[12.19px] leading-[13.93px] text-[#23262F]
                                    max-mobile:text-[5.83px] max-mobile:leading-[6.66px]'>Follow</p>
                    </button>
                  </div>
                  <div className='w-[284.7px] h-[55.72px] gap-[17.46px] flex flex-row items-center justify-between
                                  max-mobile:w-[136.11px] max-mobile:h-[26.63px] max-mobile:gap-[8.35px]'>
                    <div className='w-[163.68px] h-[55.72px] gap-[10.45px] flex flex-row items-center justify-between
                                    max-mobile:w-[78.22px] max-mobile:h-[26.63px] max-mobile:gap-[4.99px]'>
                      <div className='w-[55.72px] h-[55.72px] relative
                                      max-mobile:w-[26.63px] max-mobile:h-[26.63px]'>
                        <div className='w-[48.76px] h-[48.76px] rounded-[41.79px] bg-unleash_verified_image_3 absolute top-[3.48px] left-[3.48px]
                                        max-mobile:w-[23.3px] max-mobile:h-[23.3px] max-mobile:rounded-[19.97px] max-mobile:top-[1.66px] max-mobile:left-[1.66px]'></div>
                        <div className='w-[20.9px] h-[20.9px] rounded-[100%] bg-[#23262F] absolute left-[34.83px] flex justify-center items-center
                                        max-mobile:w-[9.99px] max-mobile:h-[9.99px] max-mobile:left-[16.64px]'>
                          <p className='font-[600] text-[10.45px] leading-[17.41px] text-whi
                                        max-mobile:text-[4.99px] max-mobile:leading-[8.32px]'>3</p>
                        </div>
                      </div>
                      <div className='w-[97.51px] h-[39px] flex flex-col justify-between
                                      max-mobile:w-[46.6px] max-mobile:h-[19px]'>
                        <p className='font-[500] text-[12.19px] leading-[20.9px] text-[#23262F]
                                      max-mobile:text-[5.83px] max-mobile:leading-[9.99px]'>Trevor Pu.</p>
                        <p className='font-[400] text-[10.45px] leading-[17.41px] text-[#777E90]
                                      max-mobile:text-[5.83px] max-mobile:leading-[9.99px]'>@TrevorP</p>
                      </div>
                    </div>
                    <button className='w-[79.86px] h-[27.93px] rounded-[6.97px] border-[1.74px] border-[#E6E8EC] bg-[#E6E8EC] gap-[10.45px]
                                       max-mobile:w-[39.31px] max-mobile:h-[13.66px] max-mobile:rounded-[3.33px] max-mobile:border-[0.83px] max-mobile:gap-[4.99px]'>
                      <p className='font-[700] text-[12.19px] leading-[13.93px] text-[#23262F]
                                    max-mobile:text-[5.83px] leading-[6.66px]'>Unfollow</p>
                    </button>
                  </div>
                </div>
              </div>
              {/*End - Block 1*/}
              {/*Start - Block 2*/}
              <div className='w-[325.64px] h-[83.79px] rounded-[13.29px] p-[11.39px] bg-[#FCFCFD] shadow-[0_18.99px_28.48px_0_rgba(70,70,70,0.1)] flex flex-row justify-between absolute left-[356px]
                              max-mobile:w-[155.69px] max-mobile:h-[40.06px] max-mobile:rounded-[6.35px] max-mobile:p-[5.45px] max-mobile:shadow-[0_9.08px_13.62px_0_rgba(70,70,70,0.1)] max-mobile:left-[170.38px]'>
                <div className='w-[227.85px] h-[61px] gap-[11.39px] flex flex-row justify-between
                                max-mobile:w-[108.94px] max-mobile:h-[30px] max-mobile:gap-[5.45px]'>
                  <div className='w-[64.56px] h-[45.57px] gap-[11.39px] flex flex-row items-center
                                  max-mobile:w-[30.86px] max-mobile:h-[21.78px] gap-[5.45px]'>
                    <div className='w-[7.6px] h-[7.6px] rounded-[100%] bg-bla
                                    max-mobile:w-[3.63px] max-mobile:h-[3.63px]'></div>
                    <div className='w-[45.57px] h-[45.57px] relative
                                    max-mobile:w-[21.78px] max-mobile:h-[21.78px]'>
                      <div className='w-[39.87px] h-[39.87px] rounded-[34.18px] top-[2.85px] left-[2.85px] absolute bg-image_1
                                      max-mobile:w-[19.06px] max-mobile:h-[19.06px] max-mobile:rounded-[16.33px] max-mobile:top-[1.36px] max-mobile:left-[1.36px]'></div>
                      <div className='w-[17.09px] h-[17.09px] left-[28.48px] bg-unleash_verified absolute
                                      max-mobile:w-[8.17px] max-mobile:h-[8.17px] max-mobile:left-[13.61px]'></div>
                    </div>
                  </div>
                  <div className='w-[151.9px] h-[61px] flex flex-col
                                  max-mobile:w-[72.63px] max-mobile:h-[30px]'>
                    <div className='w-[151.9px] h-[23px] gap-[5.7px] flex flex-row
                                    max-mobile:w-[72.63px] max-mobile:h-[11px] max-mobile:gap-[2.72px]'>
                      <p className='font-[500] text-[13.29px] leading-[22.79px] text-[#949494]
                                    max-mobile:text-[6.35px] max-mobile:leading-[10.89px]'>New bid</p>
                      <p className='font-[500] text-[13.29px] leading-[22.79px] ml-[5.7px] text-bla
                                    max-mobile:text-[6.35px] max-mobile:leading-[10.89px] max-mobile:ml-[2.72px]'>Rotation</p>
                    </div>
                    <div className='w-[151.9px] h-[38px] flex flex-col justify-between
                                    max-mobile:w-[72.63px] max-mobile:h-[19px]'>
                      <p className='font-[600] text-[11.39px] leading-[18.99px] text-bla
                                    max-mobile:text-[5.45px] max-mobile:leading-[9.08px]'>0.002 ETH</p>
                      <p className='font-[400] text-[11.39px] leading-[18.99px] text-[#949494]
                                    max-mobile:text-[5.45px] max-mobile:leading-[9.08px]'>6 Oct 2022, 11:44 PM</p>
                    </div>
                  </div>
                </div>
                <div className='w-[60.76px] h-[60.76px] rounded-[10.44px] bg-image_1
                                max-mobile:w-[29.05px] max-mobile:h-[29.05px] max-mobile:rounded-[4.99px]'></div>
              </div>
              {/*End - Block 2*/}
              {/*Start - Block 3*/}
              <div className='w-[322.1px] h-[217.08px] bg-whi top-[396px] border-[1px] border-[#EDF2F7] rounded-[14.12px] shadow-[8.82px_8.82px_44.12px_0_rgba(20,20,22,0.1)] absolute flex flex-col justify-between
              max-mobile:w-[153.99px] max-mobile:h-[103.79px] max-mobile:rounded-[6.75px] max-mobile:shadow-[4.22px_4.22px_21.1px_0_rgba(20,20,22,0.1)] max-mobile:top-[189.33px] max-mobile:border-[0.88px]'>
                <div className='w-[322.1px] h-[48.27px] flex flex-row justify-between
                                max-mobile:w-[153.99px] max-mobile:h-[23.13px]'>
                  <p className='ml-[21.18px] mt-[23.27px] font-[600] text-[18.53px] leading-[25.02px] text-[#1A202C]
                                max-mobile:ml-[10.13px] max-mobile:mt-[11.13px] max-mobile:text-[8.86px] max-mobile:leading-[11.96px]'>Recent Viewed</p>
                  <div className='w-[21.18px] h-[9.44px] mr-[21.18px] mt-[31.12px] bg-points_3
                                  max-mobile:w-[10.12px] max-mobile:h-[4.51px] max-mobile:mr-[10.12px] max-mobile:mt-[14.88px]'></div>
                </div>
                <div className='w-[322.1px] h-[144.72px]
                                max-mobile:w-[153.99px] max-mobile:h-[69.2px]'>
                  <div className='w-[277.09px] h-[54.23px] ml-[23.83px] flex flex-row justify-between items-center
                                  max-mobile:w-[132.48px] max-mobile:h-[25.93px] max-mobile:ml-[11.39px]'>
                    <div className='w-[114.32px] h-[42.78px] gap-[13.56px] flex flex-row justify-between items-center
                                    max-mobile:w-[55.36px] max-mobile:h-[20.26px] max-mobile:gap-[6.48px]'>
                      <div className='w-[45.76px] h-[42.37px] relative
                                      max-mobile:w-[21.88px] max-mobile:h-[20.26px]'>
                        <div className='w-[40.67] h-[40.67px] rounded-[847.37px] border-[1.69px] top-[0.21px] border-whi bg-weekly_users_1 absolute
                                        max-mobile:w-[19.45px] max-mobile:h-[19.45px] max-mobile:rounded-[405.13px] max-mobile:border-[0.81px] max-mobile:top-0'></div>
                       <div className='w-[18.64px] h-[18.64px] bg-whi rounded-[100%] absolute top-[23.73px] left-[27.12px] flex justify-center items-center
                                       max-mobile:w-[8.91px] max-mobile:h-[8.91px] max-mobile:top-[11.34px] max-mobile:left-[12.96px]'>
                         <p className='font-[700] text-[10.17px] leading-[15.25px]
                                       max-mobile:text-[4.86px] max-mobile:leading-[7.29px]'>1</p>
                       </div>
                     </div>
                     <div className='w-[55px] h-[42.78px] gap-[6.78px] flex flex-col justify-between
                                     max-mobile:w-[27px] max-mobile:h-[20.24px] max-mobile:gap-[3.24px]'>
                        <p className='font-[500] text-[13.56px] leading-[18.98px] text-bla
                                      max-mobile:text-[6.48px] max-mobile:leading-[9.07px]'>Alex Ca.</p>
                       <p className='font-[400] text-[11.02px] leading-[16.52px] text-[#64748B]
                                     max-mobile:text-[5.27px] max-mobile:leading-[7.9px]'>Alexy</p>
                      </div>
                    </div>
                    <div className='w-[55.95px] h-[43.78px] gap-[6.78px] flex flex-col justify-between items-end
                                    max-mobile:w-[27.1px] max-mobile:h-[21.24px] max-mobile:gap-[3.24px]'>
                      <div className='w-[55.95px] h-[19px] gap-[1.69px] flex flex-row justify-between items-center
                                      max-mobile:w-[27.1px] max-mobile:h-[9px] max-mobile:gap-[0.81px]'>
                        <div className='w-[15.25px] h-[15.25px] flex justify-center items-center
                                        max-mobile:w-[7.29px] max-mobile:h-[7.29px]'>
                          <div className='w-[7.94px] h-[13.03px] bg-weekly_users_eth
                                          max-mobile:w-[3.8px] max-mobile:h-[6.23px]'></div>
                        </div>
                      <p className='font-[600] text-[13.56px] leading-[18.98px] text-bla
                                    max-mobile:text-[6.48px] max-mobile:leading-[9.07px]'>8,456</p>
                      </div>
                      <p className='font-[400] text-[11.86px] leading-[17.79px] text-[#10C352]
                                    max-mobile:text-[5.67px] max-mobile:leading-[8.51px]'>+23,00%</p>
                    </div>
                  </div>
                  <div className='w-[277.09px] h-[54.23px] ml-[23.83px] mt-[17.65px] flex flex-row justify-between items-center
                                  max-mobile:w-[132.48px] max-mobile:h-[25.93px] max-mobile:ml-[11.39px] max-mobile:mt-[8.44px]'>
                    <div className='w-[114.32px] h-[42.78px] gap-[13.56px] flex flex-row justify-between items-center
                                    max-mobile:w-[55.36px] max-mobile:h-[20.26px] max-mobile:gap-[6.48px]'>
                      <div className='w-[45.76px] h-[42.37px] relative
                                      max-mobile:w-[21.88px] max-mobile:h-[20.26px]'>
                        <div className='w-[40.67] h-[40.67px] rounded-[847.37px] border-[1.69px] top-[0.21px] border-whi bg-weekly_users_2 absolute
                                        max-mobile:w-[19.45px] max-mobile:h-[19.45px] max-mobile:rounded-[405.13px] max-mobile:border-[0.81px] max-mobile:top-0'></div>
                       <div className='w-[18.64px] h-[18.64px] bg-whi rounded-[100%] absolute top-[23.73px] left-[27.12px] flex justify-center items-center
                                       max-mobile:w-[8.91px] max-mobile:h-[8.91px] max-mobile:top-[11.34px] max-mobile:left-[12.96px]'>
                         <p className='font-[700] text-[10.17px] leading-[15.25px]
                                       max-mobile:text-[4.86px] max-mobile:leading-[7.29px]'>2</p>
                       </div>
                     </div>
                     <div className='w-[55px] h-[42.78px] gap-[6.78px] flex flex-col justify-between
                                     max-mobile:w-[27px] max-mobile:h-[20.24px] max-mobile:gap-[3.24px]'>
                        <p className='font-[500] text-[13.56px] leading-[18.98px] text-bla
                                      max-mobile:text-[6.48px] max-mobile:leading-[9.07px]'>Juliya S.</p>
                       <p className='font-[400] text-[11.02px] leading-[16.52px] text-[#64748B]
                                     max-mobile:text-[5.27px] max-mobile:leading-[7.9px]'>JuliyaS</p>
                      </div>
                    </div>
                    <div className='w-[55.95px] h-[43.78px] gap-[6.78px] flex flex-col justify-between items-end
                                    max-mobile:w-[27.1px] max-mobile:h-[21.24px] max-mobile:gap-[3.24px]'>
                      <div className='w-[55.95px] h-[19px] gap-[1.69px] flex flex-row justify-between items-center
                                      max-mobile:w-[27.1px] max-mobile:h-[9px] max-mobile:gap-[0.81px]'>
                        <div className='w-[15.25px] h-[15.25px] flex justify-center items-center
                                        max-mobile:w-[7.29px] max-mobile:h-[7.29px]'>
                          <div className='w-[7.94px] h-[13.03px] bg-weekly_users_eth
                                          max-mobile:w-[3.8px] max-mobile:h-[6.23px]'></div>
                        </div>
                      <p className='font-[600] text-[13.56px] leading-[18.98px] text-bla
                                    max-mobile:text-[6.48px] max-mobile:leading-[9.07px]'>5,327</p>
                      </div>
                      <p className='font-[400] text-[11.86px] leading-[17.79px] text-[#E23333]
                                    max-mobile:text-[5.67px] max-mobile:leading-[8.51px]'>-32,01%</p>
                    </div>
                  </div>
                </div>
              </div>
              {/*End - Block 3*/}
            </div>
            <button className='w-[123.01px] h-[44.25px] rounded-[8.99px] mt-[82.64px] ml-[99px] bg-[#000000] flex justify-center items-center min-mobile:hidden'>
              <div className='w-[96.38px] h-[16.61px] flex flex-row items-center justify-between'>
                <p className='text-whi font-[500] text-[11.07px] leading-[13.84px]'>Explore More</p>
                <div className='w-[16.61px] h-[16.61px] bg-unleash_arrow'></div>
              </div>
            </button>
            {/*End - Illustration*/}
          </div>
        </div>
        {/*End - UNLEASH*/}
        {/*Start - BANNER*/}
        <div className='w-[1245px] h-[311px] mt-[180.92px] ml-[97px]
                        max-mobile:w-[315px] max-mobile:h-[302px] max-mobile:mt-[121px] max-mobile:ml-[27px]'>
          <div className='w-[1245px] h-[311px] flex flex-row rounded-[30px] bg-bla
                          max-mobile:w-[315px] max-mobile:h-[211px] max-mobile:flex-col max-mobile:rounded-[14.87px]'>
            <div className='w-[476px] h-[214.98px] mt-[44.22px] ml-[66px] flex flex-col
                            max-mobile:w-[236px] max-mobile:h-[106.53px] max-mobile:mt-[21.91px] max-mobile:ml-[39.16px] max-mobile:items-center'>
              <p className='font-[600] text-[45px] leading-[58.5px] tracking-[1%] text-whi
                            max-mobile:text-[22.3px] max-mobile:leading-[28.99px]'>Create and Sell NFTs</p>
              <p className='font-[500] text-[20.27px] leading-[26.35px] text-[#D4D4D4]/60 mt-[12.48px] tracking-[1%]
                            max-mobile:text-[10.04px] max-mobile:leading-[13.05px] max-mobile:mt-[5.93px]'>World&apos;s Largest NFT Place</p>
              <div className='w-[396.62px] h-[67.66px] gap-[30.51px] mt-[50.84px] flex flex-row
                              max-mobile:w-[196.54px] max-mobile:h-[33.53px] max-mobile:gap-[15.12px] max-mobile:mt-[25.08px]'>
                <button className='w-[183.06px] h-[67.66px] rounded-[12.2px] gap-[15.25px] bg-whi flex justify-center items-center
                                   max-mobile:w-[90.71px] max-mobile:h-[33.65px] max-mobile:rounded-[6.05px] max-mobile:gap-[7.56px]'>
                  <p className='font-[600] text-[21.36px] leading-[27.76px] tracking-[1%] text-bla
                                max-mobile:text-[10.58px] max-mobile:leading-[13.76px]'>Explore More</p>
                </button>
                <button className='w-[183.06px] h-[67.66px] rounded-[12.2px] border-[2.29px] border-whi gap-[15.25px] flex justify-center items-center
                                   max-mobile:w-[90.71px] max-mobile:h-[33.65px] max-mobile:rounded-[6.05px] max-mobile:border-[1.13px] max-mobile:gap-[7.56px]'>
                  <p className='font-[600] text-[21.36px] leading-[27.76px] tracking-[1%] text-whi
                                max-mobile:text-[10.58px] max-mobile:leading-[13.76px]'>Sell Artwork</p>
                </button>
              </div>
            </div>
            <div className='w-[390px] h-[264px] mt-[31px] ml-[291px] relative
                            max-mobile:w-[266.98px] max-mobile:h-[137px] max-mobile:mt-[36.56px] max-mobile:ml-[22px]'>
              <div className='w-[390px] h-[249px] rounded-[7.55px] bg-banner_image_1_op absolute top-[15px]
                              max-mobile:w-[266.98px] max-mobile:h-[129.22px] max-mobile:rounded-[4.4px] max-mobile:top-[7.78px]'></div>
              <div className='w-[369px] h-[249px] rounded-[15.79px] bg-image_1 absolute left-[12px]
                              max-mobile:w-[252.61px] max-mobile:h-[129.22px] max-mobile: max-mobile:rounded-[9.2px] max-mobile:left-[8.21px]'></div>
            </div>
          </div>
        </div>
        {/*End - BANNER*/}
        {/*Start - FOOTER*/}
        <div className='w-[1440px] h-[345px] mt-[160px] bg-bla flex flex-col
                        max-mobile:w-[375px] max-mobile:h-[426px] max-mobile:mt-[100px]'>
          <div className='w-[1248px] h-[65px] mt-[92px] ml-[96px] flex flex-row justify-between items-center
                          max-mobile:w-[327px] max-mobile:h-[259.53px] max-mobile:mt-[52px] max-mobile:ml-[27px] max-mobile:flex-col max-mobile:items-start'>
            <div className='max-mobile:w-[327px] max-mobile:h-[43.47px] max-mobile:flex max-mobile:items-center max-mobile:flex-row'>
              <div className='w-[198.88px] h-[65px] flex flex-row justify-between items-center
                              max-mobile:w-[133.08px] max-mobile:h-[43.47px]'>
                <div className='w-[65px] h-[65px] bg-footer_logo
                                max-mobile:w-[43.47px] max-mobile:h-[43.47px]'></div>
                <p className='font-[600] text-[29.92px] leading-[38.9px] text-whi
                              max-mobile:text-[20.01px] max-mobile:leading-[26.02px]'>DiveSea</p>
              </div>
              <div className='min-mobile:hidden w-[115.21px] h-[16px] flex flex-row justify-between ml-[69.12px]'>
                <div className='w-[15.94px] h-[16px] bg-footer_insta'></div>
                <div className='w-[15.94px] h-[15.21px] bg-footer_in'></div>
                <div className='w-[7.38px] h-[15.94px] bg-footer_facebook'></div>
                <div className='w-[15.94px] h-[12.98px] bg-footer_twitter'></div>
              </div>
            </div>
            <div className='w-[635px] h-[27px] flex flex-row justify-between
                            max-mobile:w-[327px] max-mobile:h-[166px] max-mobile:flex-col max-mobile:ml-[5px]'>
              <p className='font-[500] text-[17.83px] leading-[26.74px] text-[#B9B9B9]
                            max-mobile:text-[14px] max-mobile:leading-[18.88px] max-mobile:uppercase'>Privacy Policy</p>
              <p className='font-[500] text-[17.83px] leading-[26.74px] text-[#B9B9B9]
                            max-mobile:text-[14px] max-mobile:leading-[18.88px] max-mobile:uppercase'>Term & Conditions</p>
              <p className='font-[500] text-[17.83px] leading-[26.74px] text-[#B9B9B9]
                            max-mobile:text-[14px] max-mobile:leading-[18.88px] max-mobile:uppercase'>About Us</p>
              <p className='font-[500] text-[17.83px] leading-[26.74px] text-[#B9B9B9]
                            max-mobile:text-[14px] max-mobile:leading-[18.88px] max-mobile:uppercase'>Contact</p>
            </div>
          </div>
          <div className='w-[1246px] h-[1px] bg-[#818181]/25 mt-[25px] ml-[97px]
                          max-mobile:w-[314px] max-mobile:mt-[32.47px] max-mobile:ml-[30px]'></div>
          <div className='w-[1237.62px] h-[25px] flex flex-row mt-[57px] ml-[103px] justify-between items-center
                          max-mobile:w-auto max-mobile:h-auto max-mobile:mt-[26px] max-mobile:ml-[67px]'>
            <p className='font-[500] text-[17px] leading-[25px] text-[#999999]
                          max-mobile:text-[13.54px] max-mobile:leading-[19.91px]'>© 2023 EATLY All Rights Reserved.</p>
            <div className='w-[234.46px] h-[21.42px] flex flex-row justify-between max-mobile:hidden'>
              <div className='w-[21.34px] h-[21.42px] bg-footer_insta'></div>
              <div className='w-[21.34px] h-[20.36px] bg-footer_in'></div>
              <div className='w-[9.88px] h-[21.34px] bg-footer_facebook'></div>
              <div className='w-[21.34px] h-[17.37px] bg-footer_twitter'></div>
            </div>
          </div>
        </div>
        {/*End - FOOTER*/}
        </div>
    </div>
  )
}