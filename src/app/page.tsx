import React from 'react';

export default function ImageComponent() {
  return (
    <div className='bg-mywhite'>
      {/*Start - MENU*/}
      <header className='flex flex-row w-[1251px] h-[58px] pt-[45px] ml-[93px]
                         max-mobile:w-[317px] max-mobile:h-[76px] max-mobile:pt-[30px] max-mobile:ml-[28px] max-mobile:flex max-mobile:flex-col'>
        {/*Start - Logo with Name and Menu*/}
        <div className='max-mobile:flex max-mobile:flex-row'>
          {/*Start - Logo with Name*/}
          <div className='max-mobile:w-[141.46px] max-mobile:h-[46.41px] max-mobile:flex max-mobile:flex-row'>
            {/*Start - Logo*/}
            <div className='bg-logo w-[53px] h-[53px] min-mobile:mt-[3px]
                            max-mobile:w-[46.41px] max-mobile:h-[46.41px]'></div>
            {/*End - Logo*/}
            {/* Start - Name */}
            <div className='min-mobile:hidden w-[88px] h-[28px] mt-[9.85px] ml-[7.05px]'>
              <p className='w-[88px] h-[28px] font-[600] text-[21.36px] leading-[27.77px] text-[#000000]'>DiveSea</p>
            </div>
            {/*End - Name*/}
          </div>
          {/*End - Logo with Name*/}
          {/*Start - Menu*/}
          <div className='min-mobile:hidden w-[31.5px] h-[22.33px] ml-[141.79px] mt-[12px] bg-lines_3'></div>
          {/*End - Menu*/}
        </div>
        {/*End - Logo with Name and Menu*/}
        {/*Start - Line*/}
        <div className='min-mobile:hidden w-[314px] h-[0.5px] ml-[3px] mt-[29.59px] bg-[#CBCBCB]'></div>
        {/*End - Line*/}
        {/*Start - Navigation*/}
        <nav className='flex flex-row gap-[53.49px] w-[445.46px] h-[27px] mt-[16px] ml-[57.06px]
                        max-mobile:hidden'>
          <p className='uppercase w-[91px] h-[27px] text-[#606060] text-[17.83px] leading-[26.74px] font-medium'>Discover</p>
          <p className='uppercase w-[95px] h-[27px] text-[#606060] text-[17.83px] leading-[26.74px] font-medium'>Creators</p>
          <p className='uppercase w-[43px] h-[27px] text-[#606060] text-[17.83px] leading-[26.74px] font-medium'>Sell</p>
          <p className='uppercase w-[56px] h-[27px] text-[#606060] text-[17.83px] leading-[26.74px] font-medium'>Stats</p>
        </nav>
        {/*End - Navigation*/}
        {/*Start - Search Field*/}
        <div className='bg-[#EDEDED] w-[348.45px] h-[57px] mt-[1px] ml-[117.48px] rounded-[14.88px]
                        max-mobile:hidden'>
          <div className='w-[244.23px] h-[21.51px] mt-[18px] ml-[22.58px] flex flex-row'>
            <div className='bg-magnifier w-[21.51px] h-[21.51px]'></div>
            <p className='w-[197px] h-[18px] mt-[1.08px] ml-[25.72px] text-[15.71px] text-[#C2C3CB] leading-[18.46px] font-medium'>Search Art Work / Creator </p>
          </div>
        </div>
        {/*End - Search Field*/}
        {/*Start - Wallet Connection Button*/}
        <button className='bg-black w-[199.52px] h-[57.34px] ml-[30.03px] rounded-[16.17px] flex justify-center items-center
                           max-mobile:hidden'>
          <p className='uppercase w-[151px] h-[25px] text-[16.17px] text-whi leading-[24.26px] font-[600]'>Connect Wallet</p>
        </button>
        {/*End - Wallet Connection Button*/}
      </header>
      {/*End - MENU*/}

      {/*Start - HEADER*/}
      <div className='flex flex-row mt-[99px] ml-[97px]
                      max-mobile:w-[400px] max-mobile:h-[666.4px] max-mobile:mt-[74px] max-mobile:ml-[30px] max-mobile:flex-col'>
        {/*Start - 1 Secondary Block*/}
        <div className='flex flex-col mt-[12px] min-mobile:w-auto min-mobile:h-auto
                        max-mobile:w-[315.36px] max-mobile:h-[310.61px]'>
          {/*Start - Line with Text, Heading with Description and Two Buttons*/}
          <div className='w-[568px] h-[367px]
                          max-mobile:w-auto max-mobile:h-auto'>
            {/*Start - Line with Text*/}
            <div className='max-mobile:w-[153.62px] max-mobile:h-[11px] max-mobile:ml-[77px] max-mobile:flex max-mobile:flex-row'>
              <div className='min-mobile:bg-[#201F1F]/20 w-[195px] h-[1px] min-mobile:ml-[3px]
                              max-mobile:bg-[#8D8C8C] max-mobile:w-[33.29px] max-mobile:h-[0.62] max-mobile:mt-[6px]'>
              </div>
              <div className='min-mobile:hidden uppercase w-[108px] h-[11px] ml-[12.33px] flex justify-center'>
                <p className='font-[600] text-[9.25px] leading-[11.1px] tracking-[1.23px] text-[#8D8C8C]'>Over 1M Creators</p>
              </div>
            </div>
            {/*End - Line with Text*/}
            {/*Start - Heading with Description*/}
            <div className='w-[567px] h-[252px] mt-[10px]
                            max-mobile:w-[315.36px] max-mobile:h-[159.87px] max-mobile:mt-[5.98px]'>
              <p className='text-bla w-[567px] h-[180px] text-[75px] font-[600] leading-[90px] tracking-[-3px]
                            max-mobile:w-[310.94px] max-mobile:h-[114px] max-mobile:ml-[2.03px] max-mobile:text-[47.4px] max-mobile:font-[600] max-mobile:leading-[56.88px] max-mobile:tracking-[-1.9px] max-mobile:text-center'>Discover And Create NFTs</p>
              <p className='text-[#676767] w-[499px] h-[56px] ml-[2px] mt-[16px] text-[18px] font-[400] leading-[28px] text-justify
                            max-mobile:w-[315.36px] max-mobile:h-[36px] max-mobile:ml-[0px] max-mobile:mt-[9.87px] max-mobile:text-[11.38px] max-mobile:leading-[17.7px] max-mobile:text-center '>Discover, Create and Sell NFTs On Our NFT Marketplace With Over Thousands Of NFTs And Get a <span className='text-bla font-[600] text-justify
                            max-mobile:text-center'>$20 bonus</span>.</p>
            </div>
            {/*End - Heading with Description*/}
            {/*Start - Two Buttons*/}
            <div className='mt-[45px] w-[340px] h-[60px] ml-[3px] flex flex-row
                            max-mobile:mt-[42.15px] max-mobile:w-[244px] max-mobile:h-[47px] max-mobile:ml-[33px]'>
              <button className='bg-[#000000] w-[179px] h-[60px] rounded-[12.41px] flex justify-center items-center
                                 max-mobile:w-[128px] max-mobile:h-[47px] max-mobile:rounded-[8.89px]'>
                <p className='uppercase text-[#FFFFFF] w-[120px] h-[24px] text-[16.27px] leading-[24.41px] tracking-[1%] font-[500]
                              max-mobile:w-[86px] max-mobile:h-[17px] max-mobile:text-[11.66px] max-mobile:leading-[17.49px]'>Explore More</p>
              </button>
              <button className='w-[138px] h-[60px] ml-[23px] rounded-[12.41px] border-[1.5px] border-[#000000] flex justify-center items-center
                                 max-mobile:w-[99px] max-mobile:h-[47px] max-mobile:ml-[17px] max-mobile:rounded-[8.89px] max-mobile:border-[1.07px]'>
                <p className='uppercase w-[96px] h-[24px] font-[500] text-[16.27px] text-[#000000] leading-[24.41px] tracking-[1%]
                              max-mobile:w-[69px] max-mobile:h-[17px] max-mobile:text-[11.66px] max-mobile:leading-[17.49px]'>create NFT</p>
              </button>
            </div>
            {/*End - Two Buttons*/}
          </div>
          {/*End - Line with Text, Heading with Description and Two Buttons*/}
          {/*Start - Reviews*/}
          <div className='w-[452.96px] h-[70.92px] mt-[82px] ml-[3px] flex flex-row
                          max-mobile:w-[241.56px] max-mobile:h-[25.61px] max-mobile:mt-[19px] max-mobile:ml-[37px]'>
            <div className='w-[118px] h-[70.92px] flex flex-col
                            max-mobile:w-[98.48px] max-mobile:h-[24.18px]'>
              <p className='w-[118px] h-[46px] font-[600] text-[36.77px] leading-[45.96px] text-center text-bla
                            max-mobile:hidden'>430K+</p>
              <p className='w-[59px] h-[19px] mt-[5.92px] ml-[0.85px] font-[500] text-[12.26px] leading-[18.39px] text-center text-[#848586]
                            max-mobile:hidden'>Art Works</p>
              <div className='min-mobile:hidden w-[98.48px] h-[24.18px] bg-reviews_1'></div>
            </div>
            <div className='w-[111px] h-[70.92px] ml-[65.28px] flex flex-col
                            max-mobile:w-[76.69px] max-mobile:h-[12.24px] max-mobile:ml-[16.01px] max-mobile:mt-[8.81px]'>
              <p className='w-[111px] h-[46px] font-[600] text-[36.77px] leading-[45.96px] text-center text-bla
                            max-mobile:hidden'>159K+</p>
              <p className='w-[51px] h-[19px] mt-[5.92px] font-[500] text-[12.26px] leading-[18.39px] text-center text-[#848586]
                            max-mobile:hidden'>Creator</p>
              <div className='min-mobile:hidden w-[76.69px] h-[12.24px] bg-reviews_2'></div>
            </div>
            <div className='w-[94px] h-[70.92] ml-[64.69px] flex flex-col
                            max-mobile:w-[43px] max-mobile:h-[20px] max-mobile:ml-[7.38px] max-mobile:mt-[5.6px]'>
              <p className='w-[94px] h-[46px] font-[600] text-[36.77px] leading-[45.96px] text-center text-bla
                            max-mobile:hidden'>87K+</p>
              <p className='w-[66px] h-[19px] mt-[5.92px] font-[500] text-[12.26px] leading-[18.39px] text-center text-[#848586]
                            max-mobile:hidden'>Collections</p>
              <p className='min-mobile:hidden font-[500] text-[12.81px] leading-[19.22px] text-[#6E7886]/70 text-center'>4900+</p>
            </div>
          </div>
          {/*End - Reviews*/}
        </div>
        {/*End - 1 Secondary Block*/}
        {/*Start - 2 Secondary Block*/}
        <div className='w-[780px] h-[553.99px] ml-[48px] flex flex-row
                        max-mobile:w-[400px] max-mobile:h-[295.4px] max-mobile:mt-[60.39px] max-mobile:ml-[0]'>
          {/*Start - Image 1 and Arrows*/}
          <div className='flex flex-col'>
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
            <div className='bg-[#FCFCFD] w-[166px] h-[68.99px] mt-[47.5px] ml-[112px] rounded-[17.25px] p-[21.56px] gap-[10.78px] flex justify-center items-center shadow-[0_43.12px_34.49px_-25.87px_rgba(15,15,15,0.12)]
                            max-mobile:w-[88.51px] max-mobile:h-[36.79px] max-mobile:mt-[25.33px] max-mobile:ml-[59.72px] max-mobile:rounded-[9.2px] max-mobile:p-[11.5px] max-mobile:gap-[5.75px] max-mobile:shadow-[0_22.99px_18.39px_-13.79px_rgba(15,15,15,0.12)]'>
              <div className='w-[122.88px] h-[25.87px] gap-[34.49px] flex flex-row
                              max-mobile:w-[65.52px] max-mobile:h-[13.79px] max-mobile:gap-[18.39px]'>
                <div className='w-[25.87px] h-[25.87px]
                                max-mobile:w-[13.79px] max-mobile:h-[13.79px]'>
                  <div className='w-[15.09px] h-[9.7px] mt-[7.55px] ml-[5.39px] bg-left_arrow_1
                                  max-mobile:w-[8.05px] max-mobile:h-[5.17px] max-mobile:mt-[4.02px] max-mobile:ml-[2.87px]'></div>
                </div>
                <div className='bg-[#E6E8EC] w-[2.16px] h-[25.87px] rounded-[2.16px]
                                max-mobile:w-[1.15px] max-mobile:h-[13.79px] max-mobile:rounded-[1.15px]'></div>
                <div className='w-[25.87px] h-[25.87px]
                                max-mobile:w-[13.79px] max-mobile:h-[13.79px]'>
                  <div className='w-[15.09px] h-[9.7px] mt-[7.55px] ml-[5.39px] bg-right_arrow_1
                                  max-mobile:w-[8.05px] max-mobile:h-[5.17px] max-mobile:mt-[4.02px] max-mobile:ml-[2.87px]'></div>
                </div>
              </div>
            </div>
            {/*End - Arrows*/}
          </div>
          {/*End - Image 1 and Arrows*/}
          {/*Start - Image 2 and Twisted Arrow*/}
          <div className='w-[389px] h-[543px] relative
                          max-mobile:w-[191.51px] max-mobile:h-[289.54px]'>
            <div className='w-[128.78px] h-[124.22px] bg-twisted_arrow rotate-[3.08deg] absolute left-[22px] top-[60px]
                            max-mobile:w-[58.79px] max-mobile:h-[56.71px] max-mobile:left-[9.73px] max-mobile:top-[45.51px]'></div>
            <div className='w-[173px] h-[399.65px] bg-points absolute left-[216px]
                            max-mobile:w-[92.25px] max-mobile:h-[213.1px] max-mobile:left-[89.83px]'></div>
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
      {/*End - HEADER*/}

      {/*Start - WEEKLY*/}
      <div className='w-[1565px] h-[989px] mt-[143.01px] relative
                      max-mobile:w-[1105px] max-mobile:h-[589px] max-mobile:mt-[113.6px]'>
        <div className='w-[1565px] h-[873px] bg-[#F1F1F1]
                        max-mobile:w-[1105px] max-mobile:h-[589px]'>
          {/*Start - Main Text*/}
          <p className='w-[395px] h-[27px] pt-[70px] ml-[522px] font-[600] text-[45px] leading-[26.92px] text-[#C5C5C5]
                        max-mobile:w-[263px] max-mobile:h-[27px] max-mobile:pt-[57px] max-mobile:ml-[56px] max-mobile:text-[30px]'>Weekly - Top NFT</p>
          {/*End - Main Text*/}
          {/*Start - Cards*/}
          <div className='w-[1565px] h-[402.28px] mt-[100px]
                          max-mobile:w-[1105px] max-mobile:h-[284.04px] max-mobile:mt-[63px]'>
            <div className='w-[1565px] h-[402.28px] gap-[13.37px]
                            max-mobile:w-[1105px] max-mobile:h-[284.04px] max-mobile:gap-[9.44px]'>
              <div className='w-[1565px] h-[402.28px] gap-[39.84px] flex flex-row
                              max-mobile:w-[1105px] max-mobile:h-[284.04px] max-mobile:gap-[28.13px]'>
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
            </div>
          </div>
          {/*End - Cards*/}
          {/*Start - Arrows*/}
          <div className='w-[166px] h-[68.99px] ml-[637px] mt-[114.72px] bg-[#FCFCFD] rounded-[17.25px] gap-[10.78px] shadow-[0_43.12px_34.49px_-25.87px_rgba(15,15,15,0.12)] flex justify-center items-center
                          max-mobile:w-[102px] max-mobile:h-[42.39px] max-mobile:ml-[136px] max-mobile:mt-[59.96] max-mobile:rounded-[10.6px] max-mobile:gap-[6.62px] max-mobile:shadow-[0,16.49px_21.19px_-15.9px_rgba(15,15,15,0.12)'>
            <div className='w-[122.88px] h-[25.87px] gap-[34.49px] flex flex-row items-center
                            max-mobile:w-[75.51px] max-mobile:[15.9px] max-mobile:gap-[21.19px]'>
              <div className='w-[25.87px] h-[25.87px] flex items-center justify-center
                              max-mobile:w-[15.9px] max-mobile:h-[15.9px]'>
                <div className='w-[15.09px] h-[9.7px] bg-weekly_left_arrow
                                max-mobile:w-[9.27px] max-mobile:h-[5.96px]'></div>
              </div>
              <div className='w-[2.16px] h-[25.87px] rounded-[2.16px] bg-[#E6E8EC]
                              max-mobile:w-[1.32px] max-mobile:h-[15.9px] max-mobile:rounded-[1.32px]'></div>
              <div className='w-[25.87px] h-[25.87px] flex items-center justify-center
                              max-mobile:w-[15.9px] max-mobile:h-[15.9px]'>
                <div className='w-[15.09px] h-[9.7px] bg-weekly_right_arrow
                                max-mobile:w-[9.27px] max-mobile:h-[5.96px]'></div>
              </div>
            </div>
          </div>
          {/*End - Arrows*/}
        </div>
        {/*Start - Users*/}
        <div className='w-[365px] h-[246px] bg-whi left-[976px] top-[743px] border-[1px] border-[#EDF2F7] rounded-[16px] shadow-[10px_10px_50px_0_rgba(20,20,22,0.1)] absolute flex flex-col justify-between max-mobile:hidden'>
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
      {/*End - WEEKLY*/}
      {/*Start - TOP COLLECTION*/}
        <div className='w-[1247px] h-[896.59px] mt-[120.41px] ml-[98px]'>
          {/*Start - Main Text*/}
          <p className='w-[328px] h-[45px] ml-[458.41px] text-bla font-[600] text-[45.04px] leading-[44.75px]'>Top Collection</p>
          {/*End - Main Text*/}
          {/*Start - Panel*/}
          <div className='w-[1243px] h-[27px] gap-[341.04] ml-[2px] mt-[90.59px] flex flex-row justify-between'>
            <p className='w-[114px] h-[27px] font-[500] leading-[28.6px] text-[#93989A] text-[22px]'>Collection</p>
            <div className='w-[788.08px] h-[27px] gap-[92.52px] flex flex-row justify-between'>
              <p className='w-[87px] h-[27px] font-[500] text-[22px] leading-[28.6px] text-[#93989A]'>Volume</p>
              <p className='w-[66px] h-[27px] font-[500] text-[22px] leading-[28.6px] text-[#93989A]'>24h %</p>
              <p className='w-[116px] h-[27px] font-[500] text-[22px] leading-[28.6px] text-[#93989A]'>Floor Price</p>
              <p className='w-[85px] h-[27px] font-[500] text-[22px] leading-[28.6px] text-[#93989A]'>Owners</p>
              <p className='w-[65px] h-[27px] font-[500] text-[22px] leading-[28.6px] text-[#93989A]'>Items</p>
            </div>
          </div>
          {/*End - Panel*/}
          {/*Start - Users*/}
          {/*Start - User 1*/}
          <div className='w-[1247px] h-[110px] mt-[48px] flex flex-col justify-between'>
            <div className='w-[1247px] h-[84.04px] flex flex-row items-center justify-between'>
              <div className='w-[417.32px] h-[84.04px] gap-[23.65px] flex flex-row items-center'>
                <div className='w-[84.04px] h-[84.04px] rounded-[1750.91px] border-[3.5px] border-whi bg-top_collection_image_1'></div>
                <div className='w-[113px] h-[74.75px] gap-[1.75px] ml-[23.65px] flex flex-col justify-between'>
                  <p className='w-[113px] h-[39px] font-[500] text-[28.01px] leading-[39.22px] text-bla'>Alex Ca.</p>
                  <p className='w-[79px] h-[34px] font-[400] text-[22.76px] leading-[34.14px] text-[#64748B]'>By Alex</p>
                </div>
              </div>
              <div className='w-[812.78px] h-[34px] flex flex-row'>
                <div className='w-[105.02px] h-[34px] gap-[6.76px]'>
                  <div className='w-[105.02px] h-[34px] gap-[3.5px] flex flex-row justify-between items-center'>
                    <div className='w-[31.52px] h-[31.52px] flex justify-center items-center'>
                      <div className='w-[16.41px] h-[26.92px] bg-top_collection_eth'></div>
                    </div>
                    <div className='w-[70px] h-[34px] font-[600] text-[24.51px] leading-[34.32px] text-bla'>8,456</div>
                  </div>
                </div>
                <p className='w-[109px] h-[32px] font-[500] text-[24.51px] leading-[31.87px] text-[#10C352] ml-[80.83px]'>+ 27.78%</p>
                <div className='w-[72.02px] h-[34px] gap-[6.76px] ml-[63.33px]'>
                  <div className='w-[72.02px] h-[34px] gap-[3.5px] flex flex-row justify-between items-center'>
                    <div className='w-[31.52px] h-[31.52px] flex justify-center items-center'>
                      <div className='w-[16.41px] h-[26.92px] bg-top_collection_eth'></div>
                    </div>
                    <p className='w-[37px] h-[34px] font-[600] text-[24.51px] leading-[34.32px] text-bla'>3,5</p>
                  </div>
                </div>
                <p className='w-[49px] h-[31px] font-[500] text-[23.65px] leading-[30.75px] text-[#010101] ml-[145.94px]'>2.2К</p>
                <p className='w-[46px] h-[31px] font-[500] text-[23.65px] leading-[30.75px] text-[#010101] ml-[140.23px]'>500</p>
              </div>
            </div>
            <div className='w-[1233.38px] h-[1.69px] bg-[#EBE9E9]'></div>
          </div>
          {/*End - User 1*/}
          {/*Start - User 2*/}
          <div className='w-[1247px] h-[110px] mt-[41px] flex flex-col justify-between'>
            <div className='w-[1247px] h-[84.04px] flex flex-row items-center justify-between'>
              <div className='w-[417.32px] h-[84.04px] gap-[23.65px] flex flex-row items-center'>
                <div className='w-[84.04px] h-[84.04px] rounded-[1750.91px] border-[3.5px] border-whi bg-top_collection_image_2'></div>
                <div className='w-[113px] h-[74.75px] gap-[1.75px] ml-[23.65px] flex flex-col justify-between'>
                  <p className='w-[113px] h-[39px] font-[500] text-[28.01px] leading-[39.22px] text-bla'>Alex Ca.</p>
                  <p className='w-[79px] h-[34px] font-[400] text-[22.76px] leading-[34.14px] text-[#64748B]'>By Alex</p>
                </div>
              </div>
              <div className='w-[812.78px] h-[34px] flex flex-row'>
                <div className='w-[105.02px] h-[34px] gap-[6.76px]'>
                  <div className='w-[105.02px] h-[34px] gap-[3.5px] flex flex-row justify-between items-center'>
                    <div className='w-[31.52px] h-[31.52px] flex justify-center items-center'>
                      <div className='w-[16.41px] h-[26.92px] bg-top_collection_eth'></div>
                    </div>
                    <div className='w-[70px] h-[34px] font-[600] text-[24.51px] leading-[34.32px] text-bla'>4,780</div>
                  </div>
                </div>
                <p className='w-[109px] h-[32px] font-[500] text-[24.51px] leading-[31.87px] text-[#10C352] ml-[80.83px]'>+ 27.78%</p>
                <div className='w-[72.02px] h-[34px] gap-[6.76px] ml-[63.33px]'>
                  <div className='w-[72.02px] h-[34px] gap-[3.5px] flex flex-row justify-between items-center'>
                    <div className='w-[31.52px] h-[31.52px] flex justify-center items-center'>
                      <div className='w-[16.41px] h-[26.92px] bg-top_collection_eth'></div>
                    </div>
                    <p className='w-[37px] h-[34px] font-[600] text-[24.51px] leading-[34.32px] text-bla'>7,9</p>
                  </div>
                </div>
                <p className='w-[49px] h-[31px] font-[500] text-[23.65px] leading-[30.75px] text-[#010101] ml-[145.94px]'>3.4К</p>
                <p className='w-[46px] h-[31px] font-[500] text-[23.65px] leading-[30.75px] text-[#010101] ml-[140.23px]'>900</p>
              </div>
            </div>
            <div className='w-[1233.38px] h-[1.69px] bg-[#EBE9E9]'></div>
          </div>
          {/*End - User 2*/}
          {/*Start - User 3*/}
          <div className='w-[1247px] h-[110px] mt-[40px] flex flex-col justify-between'>
            <div className='w-[1247px] h-[84.04px] flex flex-row items-center justify-between'>
              <div className='w-[417.32px] h-[84.04px] gap-[23.65px] flex flex-row items-center'>
                <div className='w-[84.04px] h-[84.04px] rounded-[1750.91px] border-[3.5px] border-whi bg-top_collection_image_1'></div>
                <div className='w-[113px] h-[74.75px] gap-[1.75px] ml-[23.65px] flex flex-col justify-between'>
                  <p className='w-[113px] h-[39px] font-[500] text-[28.01px] leading-[39.22px] text-bla'>Alex Ca.</p>
                  <p className='w-[79px] h-[34px] font-[400] text-[22.76px] leading-[34.14px] text-[#64748B]'>By Alex</p>
                </div>
              </div>
              <div className='w-[812.78px] h-[34px] flex flex-row'>
                <div className='w-[105.02px] h-[34px] gap-[6.76px]'>
                  <div className='w-[105.02px] h-[34px] gap-[3.5px] flex flex-row justify-between items-center'>
                    <div className='w-[31.52px] h-[31.52px] flex justify-center items-center'>
                      <div className='w-[16.41px] h-[26.92px] bg-top_collection_eth'></div>
                    </div>
                    <div className='w-[70px] h-[34px] font-[600] text-[24.51px] leading-[34.32px] text-bla'>8,456</div>
                  </div>
                </div>
                <p className='w-[109px] h-[32px] font-[500] text-[24.51px] leading-[31.87px] text-[#10C352] ml-[80.83px]'>+ 27.78%</p>
                <div className='w-[72.02px] h-[34px] gap-[6.76px] ml-[63.33px]'>
                  <div className='w-[72.02px] h-[34px] gap-[3.5px] flex flex-row justify-between items-center'>
                    <div className='w-[31.52px] h-[31.52px] flex justify-center items-center'>
                      <div className='w-[16.41px] h-[26.92px] bg-top_collection_eth'></div>
                    </div>
                    <p className='w-[37px] h-[34px] font-[600] text-[24.51px] leading-[34.32px] text-bla'>3,5</p>
                  </div>
                </div>
                <p className='w-[49px] h-[31px] font-[500] text-[23.65px] leading-[30.75px] text-[#010101] ml-[145.94px]'>2.2К</p>
                <p className='w-[46px] h-[31px] font-[500] text-[23.65px] leading-[30.75px] text-[#010101] ml-[140.23px]'>500</p>
              </div>
            </div>
            <div className='w-[1233.38px] h-[1.69px] bg-[#EBE9E9]'></div>
          </div>
          {/*End - User 3*/}
          {/*Start - User 4*/}
          <div className='w-[1247px] h-[110px] mt-[40px] flex flex-col justify-between'>
            <div className='w-[1247px] h-[84.04px] flex flex-row items-center justify-between'>
              <div className='w-[417.32px] h-[84.04px] gap-[23.65px] flex flex-row items-center'>
                <div className='w-[84.04px] h-[84.04px] rounded-[1750.91px] border-[3.5px] border-whi bg-top_collection_image_2'></div>
                <div className='w-[113px] h-[74.75px] gap-[1.75px] ml-[23.65px] flex flex-col justify-between'>
                  <p className='w-[113px] h-[39px] font-[500] text-[28.01px] leading-[39.22px] text-bla'>Alex Ca.</p>
                  <p className='w-[79px] h-[34px] font-[400] text-[22.76px] leading-[34.14px] text-[#64748B]'>By Alex</p>
                </div>
              </div>
              <div className='w-[812.78px] h-[34px] flex flex-row'>
                <div className='w-[105.02px] h-[34px] gap-[6.76px]'>
                  <div className='w-[105.02px] h-[34px] gap-[3.5px] flex flex-row justify-between items-center'>
                    <div className='w-[31.52px] h-[31.52px] flex justify-center items-center'>
                      <div className='w-[16.41px] h-[26.92px] bg-top_collection_eth'></div>
                    </div>
                    <div className='w-[70px] h-[34px] font-[600] text-[24.51px] leading-[34.32px] text-bla'>8,456</div>
                  </div>
                </div>
                <p className='w-[109px] h-[32px] font-[500] text-[24.51px] leading-[31.87px] text-[#10C352] ml-[80.83px]'>+ 27.78%</p>
                <div className='w-[72.02px] h-[34px] gap-[6.76px] ml-[63.33px]'>
                  <div className='w-[72.02px] h-[34px] gap-[3.5px] flex flex-row justify-between items-center'>
                    <div className='w-[31.52px] h-[31.52px] flex justify-center items-center'>
                      <div className='w-[16.41px] h-[26.92px] bg-top_collection_eth'></div>
                    </div>
                    <p className='w-[37px] h-[34px] font-[600] text-[24.51px] leading-[34.32px] text-bla'>3,5</p>
                  </div>
                </div>
                <p className='w-[49px] h-[31px] font-[500] text-[23.65px] leading-[30.75px] text-[#010101] ml-[145.94px]'>2.2К</p>
                <p className='w-[46px] h-[31px] font-[500] text-[23.65px] leading-[30.75px] text-[#010101] ml-[140.23px]'>500</p>
              </div>
            </div>
            <div className='w-[1233.38px] h-[1.69px] bg-[#EBE9E9]'></div>
          </div>
          {/*End - User 4*/}
          {/*End - Users*/}
          <div className='w-[120.79px] h-[40px] ml-[1117px] mt-[85px] flex flex-row justify-between items-center'>
            <p className='w-[90px] h-[40px] font-[500] text-[17.67px] leading-[39.92px] text-[#ACADB9]'>Explore All</p>
            <div className='w-[13.96] h-[13.96px] flex flex-row relative'>
              <div className='w-[13.96px] h-[2.2px] top-[5.9px] absolute bg-top_collection_strelka_2'></div>
              <div className='w-[7.5px] h-[13.96px] left-[6.98px] absolute bg-top_collection_strelka_1'></div>
            </div>
          </div>
        </div>
        {/*End - TOP COLLECTION*/}
        {/*Start - EXPLORE*/}
        <div className='w-[1248.09px] h-[1268px] mt-[100px] ml-[96px] flex flex-col'>
          <p className='w-[466px] h-[27px] font-[600] text-[45px] leading-[26.92px] ml-[391px]'>Explore Marketplace</p>
          <div className='w-[545.8px] h-[57.72px] ml-[351px] mt-[65px] flex flex-row justify-between'>
            <button className='w-[72px] h-[56px] rounded-[13.26px] border-[2.21px] border-bla gap-[8.84px] flex justify-center items-center'>
              <p className='w-[19px] h-[23px] font-[600] text-[15.47px] leading-[23.21px] text-[#1A202C]'>All</p>
            </button>
            <button className='w-[137.04px] h-[56.2px] rounded-[13.26px] border-[2.21px] border-bla gap-[8.84px] items-center flex flex-row'>
              <div className='w-[25.19px] h-[25.19px] ml-[16.01px] flex justify-center items-center'>
                <div className='w-[16.67px] h-[20.99px] bg-explore_list'></div>
              </div>
              <p className='w-[71px] h-[23px] font-[600] text-[15.47px] leading-[23.21px] text-[#1A202C]'>Category</p>
            </button>
            <button className='w-[145.88px] h-[56.2px] rounded-[13.26px] gap-[8.84px] border-[2.21px] border-bla flex flex-row items-center'>
              <div className='w-[25.19px] h-[25.19px] ml-[18.53px] flex justify-center items-center'>
                <div className='w-[20.99px] h-[20.99px] bg-explore_collection'></div>
              </div>
              <p className='w-[79px] h-[23px] font-[600] text-[15.47px] leading-[23.21px] text-[#1A202C]'>Collection</p>
            </button>
            <button className='w-[124.88px] h-[57.72px] rounded-[13.26px] border-[2.21px] border-bla gap-[8.84px] flex flex-row items-center'>
              <div className='w-[25.19px] h-[25.19px] ml-[25.93px] bg-explore_dollar'></div>
              <p className='w-[39px] h-[23px] font-[600] text-[15.47px] leading-[23.21px] text-[#1A202C]'>Price</p>
            </button>
          </div>
          {/*Start - First Row of Cards*/}
          <div className='w-[1248px] h-[403.56px] mt-[100.28px]'>
            <div className='w-[1248px] h-[403.56px] flex flex-row justify-between'>
              {/*Start - Card 1*/}
              <div className='w-[281.13px] h-[402.28px] pt-[14.11px] bg-whi rounded-[23.48px] shadow-[38.82px_11.76px_58.81px_0_rgba(199,199,199,0.6)]'>
                <div className='w-[252.9px] h-[252.9px] ml-[14.12px] pt-[14.12px] rounded-[18.82px] bg-weekly_card_1'>
                  <div className='bg-[#1C1D20]/35 w-[116.58px] h-[37.64px] ml-[127.04px] rounded-[9.41px] border-[1.18px] border-[#1C1D20]/8 blur-[4.71] shadow-[0_4.71px_14.12px_0_rgba(28, 29, 32, 0.08)] flex justify-center items-center'>
                    <p className='w-[88px] h-[21px] font-[500] text-[14.12px] leading-[21.17px] text-whi'>07h 09m 12s</p>
                  </div>
                </div>
                <div className='w-[243.49px] h-[95.95px] mt-[18.82px] ml-[18.82px] flex flex-col justify-between'>
                  <p className='w-[113px] h-[30px] font-[600] text-[21.17px] leading-[29.64px] text-bla'>Sun-Glass</p>
                  <div className='w-[243.49px] h-[51.76px] flex flex-row justify-between'>
                    <div className='w-[121.74px] h-[50.71px] gap-[4.71px] flex flex-col'>
                      <p className='w-[81px] h-[21px] font-[400] text-[14.12px] leading-[21.17px] text-[#94A3B8]'>Current bid</p>
                      <div className='w-[53.53px] h-[25px] gap-[2.35px] flex flex-row justify-between itemc-center'>
                        <div className='w-[21.17px] h-[21.17px] flex justify-center items-center'>
                          <div className='w-[11.03px] h-[18.09px] bg-weekly_eth'></div>
                        </div>
                        <p className='w-[30px] h-[25px] font-[500] text-[16.47px] leading-[24.7px]'>1.75</p>
                      </div>
                    </div>
                    <button className='w-[121.74px] h-[51.76px] bg-bla rounded-[11.76px] gap-[11.76px] flex justify-center items-center'>
                      <p className='w-[71px] h-[21px] font-[600] text-[14.12px] leading-[21.17px] text-whi'>PLACE BID</p>
                    </button>
                  </div>
                </div>
              </div>
              {/*End - Card 1*/}
              {/*Start - Card 2*/}
              <div className='w-[281.13px] h-[402.28px] pt-[14.11px] bg-whi rounded-[23.48px] shadow-[38.82px_11.76px_58.81px_0_rgba(199,199,199,0.6)]'>
                <div className='w-[252.9px] h-[252.9px] ml-[14.12px] pt-[14.12px] rounded-[18.82px] bg-weekly_card_2'>
                  <div className='bg-[#1C1D20]/35 w-[116.58px] h-[37.64px] ml-[127.04px] rounded-[9.41px] border-[1.18px] border-[#1C1D20]/8 blur-[4.71] shadow-[0_4.71px_14.12px_0_rgba(28, 29, 32, 0.08)] flex justify-center items-center'>
                    <p className='w-[88px] h-[21px] font-[500] text-[14.12px] leading-[21.17px] text-whi'>07h 09m 12s</p>
                  </div>
                </div>
                <div className='w-[243.49px] h-[95.95px] mt-[18.82px] ml-[18.82px] flex flex-col justify-between'>
                  <p className='w-[113px] h-[30px] font-[600] text-[21.17px] leading-[29.64px] text-bla'>Sun-Glass</p>
                  <div className='w-[243.49px] h-[51.76px] flex flex-row justify-between'>
                    <div className='w-[121.74px] h-[50.71px] gap-[4.71px] flex flex-col'>
                      <p className='w-[81px] h-[21px] font-[400] text-[14.12px] leading-[21.17px] text-[#94A3B8]'>Current bid</p>
                      <div className='w-[53.53px] h-[25px] gap-[2.35px] flex flex-row justify-between itemc-center'>
                        <div className='w-[21.17px] h-[21.17px] flex justify-center items-center'>
                          <div className='w-[11.03px] h-[18.09px] bg-weekly_eth'></div>
                        </div>
                        <p className='w-[30px] h-[25px] font-[500] text-[16.47px] leading-[24.7px]'>1.75</p>
                      </div>
                    </div>
                    <button className='w-[121.74px] h-[51.76px] bg-bla rounded-[11.76px] gap-[11.76px] flex justify-center items-center'>
                      <p className='w-[71px] h-[21px] font-[600] text-[14.12px] leading-[21.17px] text-whi'>PLACE BID</p>
                    </button>
                  </div>
                </div>
              </div>
              {/*End - Card 2*/}
              {/*Start - Card 3*/}
              <div className='w-[281.13px] h-[402.28px] pt-[14.11px] bg-whi rounded-[23.48px] shadow-[38.82px_11.76px_58.81px_0_rgba(199,199,199,0.6)]'>
                <div className='w-[252.9px] h-[252.9px] ml-[14.12px] pt-[14.12px] rounded-[18.82px] bg-weekly_card_3'>
                  <div className='bg-[#1C1D20]/35 w-[116.58px] h-[37.64px] ml-[127.04px] rounded-[9.41px] border-[1.18px] border-[#1C1D20]/8 blur-[4.71] shadow-[0_4.71px_14.12px_0_rgba(28, 29, 32, 0.08)] flex justify-center items-center'>
                    <p className='w-[88px] h-[21px] font-[500] text-[14.12px] leading-[21.17px] text-whi'>07h 09m 12s</p>
                  </div>
                </div>
                <div className='w-[243.49px] h-[95.95px] mt-[18.82px] ml-[18.82px] flex flex-col justify-between'>
                  <p className='w-[113px] h-[30px] font-[600] text-[21.17px] leading-[29.64px] text-bla'>Sun-Glass</p>
                  <div className='w-[243.49px] h-[51.76px] flex flex-row justify-between'>
                    <div className='w-[121.74px] h-[50.71px] gap-[4.71px] flex flex-col'>
                      <p className='w-[81px] h-[21px] font-[400] text-[14.12px] leading-[21.17px] text-[#94A3B8]'>Current bid</p>
                      <div className='w-[53.53px] h-[25px] gap-[2.35px] flex flex-row justify-between itemc-center'>
                        <div className='w-[21.17px] h-[21.17px] flex justify-center items-center'>
                          <div className='w-[11.03px] h-[18.09px] bg-weekly_eth'></div>
                        </div>
                        <p className='w-[30px] h-[25px] font-[500] text-[16.47px] leading-[24.7px]'>1.75</p>
                      </div>
                    </div>
                    <button className='w-[121.74px] h-[51.76px] bg-bla rounded-[11.76px] gap-[11.76px] flex justify-center items-center'>
                      <p className='w-[71px] h-[21px] font-[600] text-[14.12px] leading-[21.17px] text-whi'>PLACE BID</p>
                    </button>
                  </div>
                </div>
              </div>
              {/*End - Card 3*/}
              {/*Start - Card 4*/}
              <div className='w-[281.13px] h-[402.28px] pt-[14.11px] bg-whi rounded-[23.48px] shadow-[38.82px_11.76px_58.81px_0_rgba(199,199,199,0.6)]'>
                <div className='w-[252.9px] h-[252.9px] ml-[14.12px] pt-[14.12px] rounded-[18.82px] bg-weekly_card_4'>
                  <div className='bg-[#1C1D20]/35 w-[116.58px] h-[37.64px] ml-[127.04px] rounded-[9.41px] border-[1.18px] border-[#1C1D20]/8 blur-[4.71] shadow-[0_4.71px_14.12px_0_rgba(28, 29, 32, 0.08)] flex justify-center items-center'>
                    <p className='w-[88px] h-[21px] font-[500] text-[14.12px] leading-[21.17px] text-whi'>19h 09m 12s</p>
                  </div>
                </div>
                <div className='w-[243.49px] h-[95.95px] mt-[18.82px] ml-[18.82px] flex flex-col justify-between'>
                  <p className='w-[80px] h-[30px] font-[600] text-[21.17px] leading-[29.64px] text-bla'>NuEvey</p>
                  <div className='w-[243.49px] h-[51.76px] flex flex-row justify-between'>
                    <div className='w-[121.74px] h-[50.71px] gap-[4.71px] flex flex-col'>
                      <p className='w-[81px] h-[21px] font-[400] text-[14.12px] leading-[21.17px] text-[#94A3B8]'>Current bid</p>
                      <div className='w-[53.53px] h-[25px] gap-[2.35px] flex flex-row justify-between itemc-center'>
                        <div className='w-[21.17px] h-[21.17px] flex justify-center items-center'>
                          <div className='w-[11.03px] h-[18.09px] bg-weekly_eth'></div>
                        </div>
                        <p className='w-[30px] h-[25px] font-[500] text-[16.47px] leading-[24.7px]'>1.25</p>
                      </div>
                    </div>
                    <button className='w-[121.74px] h-[51.76px] bg-bla rounded-[11.76px] gap-[11.76px] flex justify-center items-center'>
                      <p className='w-[71px] h-[21px] font-[600] text-[14.12px] leading-[21.17px] text-whi'>PLACE BID</p>
                    </button>
                  </div>
                </div>
              </div>
              {/*End - Card 4*/}
            </div>
          </div>
          {/*End - First Row of Cards*/}
          {/*Start - Second Row of Cards*/}
          <div className='w-[1248px] h-[403.56px] mt-[100.28px]'>
            <div className='w-[1248px] h-[403.56px] flex flex-row-reverse justify-between'>
              {/*Start - Card 1*/}
              <div className='w-[281.13px] h-[402.28px] pt-[14.11px] bg-whi rounded-[23.48px] shadow-[38.82px_11.76px_58.81px_0_rgba(199,199,199,0.6)]'>
                <div className='w-[252.9px] h-[252.9px] ml-[14.12px] pt-[14.12px] rounded-[18.82px] bg-weekly_card_1'>
                  <div className='bg-[#1C1D20]/35 w-[116.58px] h-[37.64px] ml-[127.04px] rounded-[9.41px] border-[1.18px] border-[#1C1D20]/8 blur-[4.71] shadow-[0_4.71px_14.12px_0_rgba(28, 29, 32, 0.08)] flex justify-center items-center'>
                    <p className='w-[88px] h-[21px] font-[500] text-[14.12px] leading-[21.17px] text-whi'>07h 09m 12s</p>
                  </div>
                </div>
                <div className='w-[243.49px] h-[95.95px] mt-[18.82px] ml-[18.82px] flex flex-col justify-between'>
                  <p className='w-[113px] h-[30px] font-[600] text-[21.17px] leading-[29.64px] text-bla'>Sun-Glass</p>
                  <div className='w-[243.49px] h-[51.76px] flex flex-row justify-between'>
                    <div className='w-[121.74px] h-[50.71px] gap-[4.71px] flex flex-col'>
                      <p className='w-[81px] h-[21px] font-[400] text-[14.12px] leading-[21.17px] text-[#94A3B8]'>Current bid</p>
                      <div className='w-[53.53px] h-[25px] gap-[2.35px] flex flex-row justify-between itemc-center'>
                        <div className='w-[21.17px] h-[21.17px] flex justify-center items-center'>
                          <div className='w-[11.03px] h-[18.09px] bg-weekly_eth'></div>
                        </div>
                        <p className='w-[30px] h-[25px] font-[500] text-[16.47px] leading-[24.7px]'>1.75</p>
                      </div>
                    </div>
                    <button className='w-[121.74px] h-[51.76px] bg-bla rounded-[11.76px] gap-[11.76px] flex justify-center items-center'>
                      <p className='w-[71px] h-[21px] font-[600] text-[14.12px] leading-[21.17px] text-whi'>PLACE BID</p>
                    </button>
                  </div>
                </div>
              </div>
              {/*End - Card 1*/}
              {/*Start - Card 2*/}
              <div className='w-[281.13px] h-[402.28px] pt-[14.11px] bg-whi rounded-[23.48px] shadow-[38.82px_11.76px_58.81px_0_rgba(199,199,199,0.6)]'>
                <div className='w-[252.9px] h-[252.9px] ml-[14.12px] pt-[14.12px] rounded-[18.82px] bg-weekly_card_2'>
                  <div className='bg-[#1C1D20]/35 w-[116.58px] h-[37.64px] ml-[127.04px] rounded-[9.41px] border-[1.18px] border-[#1C1D20]/8 blur-[4.71] shadow-[0_4.71px_14.12px_0_rgba(28, 29, 32, 0.08)] flex justify-center items-center'>
                    <p className='w-[88px] h-[21px] font-[500] text-[14.12px] leading-[21.17px] text-whi'>07h 09m 12s</p>
                  </div>
                </div>
                <div className='w-[243.49px] h-[95.95px] mt-[18.82px] ml-[18.82px] flex flex-col justify-between'>
                  <p className='w-[113px] h-[30px] font-[600] text-[21.17px] leading-[29.64px] text-bla'>Sun-Glass</p>
                  <div className='w-[243.49px] h-[51.76px] flex flex-row justify-between'>
                    <div className='w-[121.74px] h-[50.71px] gap-[4.71px] flex flex-col'>
                      <p className='w-[81px] h-[21px] font-[400] text-[14.12px] leading-[21.17px] text-[#94A3B8]'>Current bid</p>
                      <div className='w-[53.53px] h-[25px] gap-[2.35px] flex flex-row justify-between itemc-center'>
                        <div className='w-[21.17px] h-[21.17px] flex justify-center items-center'>
                          <div className='w-[11.03px] h-[18.09px] bg-weekly_eth'></div>
                        </div>
                        <p className='w-[30px] h-[25px] font-[500] text-[16.47px] leading-[24.7px]'>1.75</p>
                      </div>
                    </div>
                    <button className='w-[121.74px] h-[51.76px] bg-bla rounded-[11.76px] gap-[11.76px] flex justify-center items-center'>
                      <p className='w-[71px] h-[21px] font-[600] text-[14.12px] leading-[21.17px] text-whi'>PLACE BID</p>
                    </button>
                  </div>
                </div>
              </div>
              {/*End - Card 2*/}
              {/*Start - Card 3*/}
              <div className='w-[281.13px] h-[402.28px] pt-[14.11px] bg-whi rounded-[23.48px] shadow-[38.82px_11.76px_58.81px_0_rgba(199,199,199,0.6)]'>
                <div className='w-[252.9px] h-[252.9px] ml-[14.12px] pt-[14.12px] rounded-[18.82px] bg-weekly_card_4'>
                  <div className='bg-[#1C1D20]/35 w-[116.58px] h-[37.64px] ml-[127.04px] rounded-[9.41px] border-[1.18px] border-[#1C1D20]/8 blur-[4.71] shadow-[0_4.71px_14.12px_0_rgba(28, 29, 32, 0.08)] flex justify-center items-center'>
                    <p className='w-[88px] h-[21px] font-[500] text-[14.12px] leading-[21.17px] text-whi'>19h 09m 12s</p>
                  </div>
                </div>
                <div className='w-[243.49px] h-[95.95px] mt-[18.82px] ml-[18.82px] flex flex-col justify-between'>
                  <p className='w-[80px] h-[30px] font-[600] text-[21.17px] leading-[29.64px] text-bla'>NuEvey</p>
                  <div className='w-[243.49px] h-[51.76px] flex flex-row justify-between'>
                    <div className='w-[121.74px] h-[50.71px] gap-[4.71px] flex flex-col'>
                      <p className='w-[81px] h-[21px] font-[400] text-[14.12px] leading-[21.17px] text-[#94A3B8]'>Current bid</p>
                      <div className='w-[53.53px] h-[25px] gap-[2.35px] flex flex-row justify-between itemc-center'>
                        <div className='w-[21.17px] h-[21.17px] flex justify-center items-center'>
                          <div className='w-[11.03px] h-[18.09px] bg-weekly_eth'></div>
                        </div>
                        <p className='w-[30px] h-[25px] font-[500] text-[16.47px] leading-[24.7px]'>1.25</p>
                      </div>
                    </div>
                    <button className='w-[121.74px] h-[51.76px] bg-bla rounded-[11.76px] gap-[11.76px] flex justify-center items-center'>
                      <p className='w-[71px] h-[21px] font-[600] text-[14.12px] leading-[21.17px] text-whi'>PLACE BID</p>
                    </button>
                  </div>
                </div>
              </div>
              {/*End - Card 3*/}
              {/*Start - Card 4*/}
              <div className='w-[281.13px] h-[402.28px] pt-[14.11px] bg-whi rounded-[23.48px] shadow-[38.82px_11.76px_58.81px_0_rgba(199,199,199,0.6)]'>
                <div className='w-[252.9px] h-[252.9px] ml-[14.12px] pt-[14.12px] rounded-[18.82px] bg-weekly_card_3'>
                  <div className='bg-[#1C1D20]/35 w-[116.58px] h-[37.64px] ml-[127.04px] rounded-[9.41px] border-[1.18px] border-[#1C1D20]/8 blur-[4.71] shadow-[0_4.71px_14.12px_0_rgba(28, 29, 32, 0.08)] flex justify-center items-center'>
                    <p className='w-[88px] h-[21px] font-[500] text-[14.12px] leading-[21.17px] text-whi'>07h 09m 12s</p>
                  </div>
                </div>
                <div className='w-[243.49px] h-[95.95px] mt-[18.82px] ml-[18.82px] flex flex-col justify-between'>
                  <p className='w-[113px] h-[30px] font-[600] text-[21.17px] leading-[29.64px] text-bla'>Sun-Glass</p>
                  <div className='w-[243.49px] h-[51.76px] flex flex-row justify-between'>
                    <div className='w-[121.74px] h-[50.71px] gap-[4.71px] flex flex-col'>
                      <p className='w-[81px] h-[21px] font-[400] text-[14.12px] leading-[21.17px] text-[#94A3B8]'>Current bid</p>
                      <div className='w-[53.53px] h-[25px] gap-[2.35px] flex flex-row justify-between itemc-center'>
                        <div className='w-[21.17px] h-[21.17px] flex justify-center items-center'>
                          <div className='w-[11.03px] h-[18.09px] bg-weekly_eth'></div>
                        </div>
                        <p className='w-[30px] h-[25px] font-[500] text-[16.47px] leading-[24.7px]'>1.75</p>
                      </div>
                    </div>
                    <button className='w-[121.74px] h-[51.76px] bg-bla rounded-[11.76px] gap-[11.76px] flex justify-center items-center'>
                      <p className='w-[71px] h-[21px] font-[600] text-[14.12px] leading-[21.17px] text-whi'>PLACE BID</p>
                    </button>
                  </div>
                </div>
              </div>
              {/*End - Card 4*/}
            </div>
          </div>
          {/*End - Second Row of Cards*/}
          <div className='w-[120.79px] h-[40px] ml-[1118.43px] mt-[70px] flex flex-row justify-between items-center'>
            <p className='w-[90px] h-[40px] font-[500] text-[17.67px] leading-[39.92px] text-[#ACADB9]'>Explore All</p>
            <div className='w-[13.96] h-[13.96px] flex flex-row relative'>
              <div className='w-[13.96px] h-[2.2px] top-[5.9px] absolute bg-top_collection_strelka_2'></div>
              <div className='w-[7.5px] h-[13.96px] left-[6.98px] absolute bg-top_collection_strelka_1'></div>
            </div>
          </div>
        </div>
        {/*End - EXPLORE*/}
        {/*Start - UNLEASH*/}
        <div className='w-[1402.65px] h-[688.08px] flex flex-col justify-between ml-[96px] mt-[103px]'>
          <div className='w-[1248px] h-[0.71px] bg-[#CBCBCB]'></div>
          <div className='w-[1402.65px] h-[613.08px] flex flex-row'>
            {/*Start - Content*/}
            <div className='w-[461px] h-[535px] ml-[3px] mt-[41px]'>
              <div className='w-[461px] h-[109px] flex flex-col'>
                <p className='font-[600] text-[45px] leading-[54.4px] text-[#C4C4C4]'>Just Unleash -</p>
                <p className='font-[600] text-[45px] leading-[54.4px] text-[#18181B]'>Your Innner Collector</p>
              </div>
              <div className='w-[297px] h-[252px] mt-[45px] flex flex-col justify-between'>
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
              <button className='w-[164px] h-[59px] rounded-[11.99px] bg-[#000000] flex justify-center items-center mt-[70px]'>
                <div className='w-[128.51px] h-[22.14px] flex flex-row items-center justify-between'>
                  <p className='w-[95px] h-[19px] text-whi font-[500] text-[14.76px] leading-[18.45px]'>Explore More</p>
                  <div className='w-[22.14px] h-[22.14px] bg-unleash_arrow'></div>
                </div>
              </button>
            </div>
            {/*End - Content*/}
            {/*Start - Illustration*/}
            <div className='w-[836.65px] h-[613.08px] ml-[102px] relative'>
              {/*Start - Background Block*/}
              <div className='w-[399.65px] h-[173px] bg-unleash_points absolute top-[410px] left-[437px]'></div>
              {/*End - Background Block*/}
              {/*Start - Block 1*/}
              <div className='w-[322.1px] h-[510.06px] rounded-[14.12px] bg-whi absolute shadow-[8.82px_8.82px_44.12px_0_rgba(20,20,22,0.1) left-[179px] top-[38.21px] flex flex-col'>
                <div className='w-[322.1px h-[51.47px] flex flex-row'>
                  <p className='w-[110px] h-[25px] font-[600] text-[18.53px] text-[#1A202C] ml-[21.18px] mt-[26.47px] leading-[25.02px]'>Best Sellers</p>
                  <div className='w-[21.18px] h-[21.18px] flex justify-center items-center mt-[28.24px] ml-[148.56px]'>
                    <div className='w-[14.12px] h-[1.76px] bg-points_3'></div>
                  </div>
                </div>
                <div className='w-[284.7px] h-[409.33px] mt-[23.54px] ml-[17.31px] flex flex-col justify-between'>
                  <div className='w-[284.7px] h-[55.72px] gap-[17.46px] flex flex-row items-center justify-between'>
                    <div className='w-[163.68px] h-[55.72px] gap-[10.45px] flex flex-row items-center justify-between'>
                      <div className='w-[55.72px] h-[55.72px] relative'>
                        <div className='w-[48.76px] h-[48.76px] rounded-[41.79px] bg-image_2 absolute top-[3.48px] left-[3.48px]'></div>
                        <div className='w-[20.9px] h-[20.9px] rounded-[100%] bg-[#23262F] absolute left-[34.83px] flex justify-center items-center'>
                          <p className='font-[600] text-[10.45px] leading-[17.41px] text-whi'>1</p>
                        </div>
                      </div>
                      <div className='w-[97.51px] h-[39px] flex flex-col justify-between'>
                        <p className='w-[50.48px] h-[21px] font-[500] text-[12.19px] leading-[20.9px] text-[#23262F]'>Alex Ca.</p>
                        <p className='w-[38px] h-[18px] font-[400] text-[10.45px] leading-[17.41px] text-[#777E90]'>@Alexy</p>
                      </div>
                    </div>
                    <button className='w-[65.86px] h-[27.93px] rounded-[6.97px] border-[1.74px] border-[#E6E8EC] gap-[10.45px]'>
                      <p className='font-[700] text-[12.19px] leading-[13.93px] text-[#23262F]'>Follow</p>
                    </button>
                  </div>
                  <div className='w-[284.7px] h-[55.72px] gap-[17.46px] flex flex-row items-center justify-between'>
                    <div className='w-[163.68px] h-[55.72px] gap-[10.45px] flex flex-row items-center justify-between'>
                      <div className='w-[55.72px] h-[55.72px] relative'>
                        <div className='w-[48.76px] h-[48.76px] rounded-[41.79px] bg-weekly_card_5 absolute top-[3.48px] left-[3.48px]'></div>
                        <div className='w-[20.9px] h-[20.9px] rounded-[100%] bg-[#23262F] absolute left-[34.83px] flex justify-center items-center'>
                          <p className='font-[600] text-[10.45px] leading-[17.41px] text-whi'>2</p>
                        </div>
                      </div>
                      <div className='w-[97.51px] h-[39px] flex flex-col justify-between'>
                        <p className='w-[59.48px] h-[21px] font-[500] text-[12.19px] leading-[20.9px] text-[#23262F]'>Juliya Sa.</p>
                        <p className='w-[48px] h-[18px] font-[400] text-[10.45px] leading-[17.41px] text-[#777E90]'>@JuliyaS</p>
                      </div>
                    </div>
                    <button className='w-[65.86px] h-[27.93px] rounded-[6.97px] border-[1.74px] border-[#E6E8EC] gap-[10.45px]'>
                      <p className='font-[700] text-[12.19px] leading-[13.93px] text-[#23262F]'>Follow</p>
                    </button>
                  </div>
                  <div className='w-[284.7px] h-[55.72px] gap-[17.46px] flex flex-row items-center justify-between'>
                    <div className='w-[163.68px] h-[55.72px] gap-[10.45px] flex flex-row items-center justify-between'>
                      <div className='w-[55.72px] h-[55.72px] relative'>
                        <div className='w-[48.76px] h-[48.76px] rounded-[41.79px] bg-image_1 absolute top-[3.48px] left-[3.48px]'></div>
                        <div className='w-[20.9px] h-[20.9px] rounded-[100%] bg-[#23262F] absolute left-[34.83px] flex justify-center items-center'>
                          <p className='font-[600] text-[10.45px] leading-[17.41px] text-whi'>2</p>
                        </div>
                      </div>
                      <div className='w-[97.51px] h-[39px] flex flex-col justify-between'>
                        <p className='w-[59.48px] h-[21px] font-[500] text-[12.19px] leading-[20.9px] text-[#23262F]'>Juliya Sa.</p>
                        <p className='w-[48px] h-[18px] font-[400] text-[10.45px] leading-[17.41px] text-[#777E90]'>@JuliyaS</p>
                      </div>
                    </div>
                    <button className='w-[65.86px] h-[27.93px] rounded-[6.97px] border-[1.74px] border-[#E6E8EC] gap-[10.45px]'>
                      <p className='font-[700] text-[12.19px] leading-[13.93px] text-[#23262F]'>Follow</p>
                    </button>
                  </div>
                  <div className='w-[284.7px] h-[55.72px] gap-[17.46px] flex flex-row items-center justify-between'>
                    <div className='w-[163.68px] h-[55.72px] gap-[10.45px] flex flex-row items-center justify-between'>
                      <div className='w-[55.72px] h-[55.72px] relative'>
                        <div className='w-[48.76px] h-[48.76px] rounded-[41.79px] bg-weekly_card_3 absolute top-[3.48px] left-[3.48px]'></div>
                        <div className='w-[20.9px] h-[20.9px] rounded-[100%] bg-[#23262F] absolute left-[34.83px] flex justify-center items-center'>
                          <p className='font-[600] text-[10.45px] leading-[17.41px] text-whi'>3</p>
                        </div>
                      </div>
                      <div className='w-[97.51px] h-[39px] flex flex-col justify-between'>
                        <p className='w-[61.48px] h-[21px] font-[500] text-[12.19px] leading-[20.9px] text-[#23262F]'>Trevor Pu.</p>
                        <p className='w-[50px] h-[18px] font-[400] text-[10.45px] leading-[17.41px] text-[#777E90]'>@TrevorP</p>
                      </div>
                    </div>
                    <button className='w-[79.86px] h-[27.93px] rounded-[6.97px] border-[1.74px] border-[#E6E8EC] bg-[#E6E8EC] gap-[10.45px]'>
                      <p className='font-[700] text-[12.19px] leading-[13.93px] text-[#23262F]'>Unfollow</p>
                    </button>
                  </div>
                  <div className='w-[284.7px] h-[55.72px] gap-[17.46px] flex flex-row items-center justify-between'>
                    <div className='w-[163.68px] h-[55.72px] gap-[10.45px] flex flex-row items-center justify-between'>
                      <div className='w-[55.72px] h-[55.72px] relative'>
                        <div className='w-[48.76px] h-[48.76px] rounded-[41.79px] bg-unleash_verified_image_2 absolute top-[3.48px] left-[3.48px]'></div>
                        <div className='w-[20.9px] h-[20.9px] rounded-[100%] bg-[#23262F] absolute left-[34.83px] flex justify-center items-center'>
                          <p className='font-[600] text-[10.45px] leading-[17.41px] text-whi'>1</p>
                        </div>
                      </div>
                      <div className='w-[97.51px] h-[39px] flex flex-col justify-between'>
                        <p className='w-[59.48px] h-[21px] font-[500] text-[12.19px] leading-[20.9px] text-[#23262F]'>Juliya Sa.</p>
                        <p className='w-[48px] h-[18px] font-[400] text-[10.45px] leading-[17.41px] text-[#777E90]'>@JuliyaS</p>
                      </div>
                    </div>
                    <button className='w-[65.86px] h-[27.93px] rounded-[6.97px] border-[1.74px] border-[#E6E8EC] gap-[10.45px]'>
                      <p className='font-[700] text-[12.19px] leading-[13.93px] text-[#23262F]'>Follow</p>
                    </button>
                  </div>
                  <div className='w-[284.7px] h-[55.72px] gap-[17.46px] flex flex-row items-center justify-between'>
                    <div className='w-[163.68px] h-[55.72px] gap-[10.45px] flex flex-row items-center justify-between'>
                      <div className='w-[55.72px] h-[55.72px] relative'>
                        <div className='w-[48.76px] h-[48.76px] rounded-[41.79px] bg-unleash_verified_image_3 absolute top-[3.48px] left-[3.48px]'></div>
                        <div className='w-[20.9px] h-[20.9px] rounded-[100%] bg-[#23262F] absolute left-[34.83px] flex justify-center items-center'>
                          <p className='font-[600] text-[10.45px] leading-[17.41px] text-whi'>1</p>
                        </div>
                      </div>
                      <div className='w-[97.51px] h-[39px] flex flex-col justify-between'>
                        <p className='w-[61.48px] h-[21px] font-[500] text-[12.19px] leading-[20.9px] text-[#23262F]'>Trevor Pu.</p>
                        <p className='w-[50px] h-[18px] font-[400] text-[10.45px] leading-[17.41px] text-[#777E90]'>@TrevorP</p>
                      </div>
                    </div>
                    <button className='w-[79.86px] h-[27.93px] rounded-[6.97px] border-[1.74px] border-[#E6E8EC] bg-[#E6E8EC] gap-[10.45px]'>
                      <p className='font-[700] text-[12.19px] leading-[13.93px] text-[#23262F]'>Unfollow</p>
                    </button>
                  </div>
                </div>
              </div>
              {/*End - Block 1*/}
              {/*Start - Block 2*/}
              <div className='w-[325.64px] h-[83.79px] rounded-[13.29px] p-[11.39px] bg-[#FCFCFD] shadow-[0_18.99px_28.48px_0_rgba(70,70,70,0.1)] flex flex-row justify-between absolute left-[356px]'>
                <div className='w-[227.85px] h-[61px] gap-[11.39px] flex flex-row justify-between'>
                  <div className='w-[64.56px] h-[45.57px] gap-[11.39px] flex flex-row items-center'>
                    <div className='w-[7.6px] h-[7.6px] rounded-[100%] bg-bla'></div>
                    <div className='w-[45.57px] h-[45.57px] relative'>
                      <div className='w-[39.87px] h-[39.87px] rounded-[34.18px] top-[2.85px] left-[2.85px] absolute bg-image_1'></div>
                      <div className='w-[17.09px] h-[17.09px] left-[28.48px] bg-unleash_verified absolute'></div>
                    </div>
                  </div>
                  <div className='w-[151.9px] h-[61px] flex flex-col'>
                    <div className='w-[151.9px] h-[23px] gap-[5.7px] flex flex-row'>
                      <p className='w-[54px] h-[23px] font-[500] text-[13.29px] leading-[22.79px] text-[#949494]'>New bid</p>
                      <p className='w-[57px] h-[23px] font-[500] text-[13.29px] leading-[22.79px] text-bla'>Rotation</p>
                    </div>
                    <div className='w-[151.9px] h-[38px] flex flex-col justify-between'>
                      <p className='font-[600] text-[11.39px] leading-[18.99px] text-bla'>0.002 ETH</p>
                      <p className='font-[400] text-[11.39px] leading-[18.99px] text-[#949494]'>6 Oct 2022, 11:44 PM</p>
                    </div>
                  </div>
                </div>
                <div className='w-[60.76px] h-[60.76px] rounded-[10.44px] bg-image_1'></div>
              </div>
              {/*End - Block 2*/}
              {/*Start - Block 3*/}
              <div className='w-[322px] h-[217.08px] bg-whi top-[396px] border-[1px] border-[#EDF2F7] rounded-[14.12px] shadow-[8.82px_8.82px_44.12px_0_rgba(20,20,22,0.1)] absolute flex flex-col justify-between'>
                <div className='w-[322px] h-[48.27px] flex flex-row'>
                  <p className='w-[142px] h-[25px] ml-[21.18px] mt-[23.27px] font-[600] text-[18.53px] leading-[25.02px] text-[#1A202C]'>Recent Viewed</p>
                  <div className='w-[21.18px] h-[9.44px] ml-[116.56px] mt-[31.12px] bg-points_3'></div>
                </div>
                <div className='w-[363px] h-[144.72px]'>
                  <div className='w-[277.09px] h-[54.23px] ml-[23.83px] flex flex-row justify-between items-center'>
                    <div className='w-[114.32px] h-[42.78px] gap-[13.56px] flex flex-row justify-between items-center'>
                      <div className='w-[45.76px] h-[42.37px] relative'>
                        <div className='w-[40.67] h-[40.67px] rounded-[847.37px] border-[1.69px] top-[0.21px] border-whi bg-weekly_users_1 absolute'></div>
                       <div className='w-[18.64px] h-[18.64px] bg-whi rounded-[100%] absolute top-[23.73px] left-[27.12px] flex justify-center items-center'>
                         <p className='w-[4px] h-[15px] font-[700] text-[10.17px] leading-[15.25px]'>1</p>
                       </div>
                     </div>
                     <div className='w-[55px] h-[42.78px] gap-[6.78px] flex flex-col justify-between'>
                        <p className='w-[55px] h-[19px] font-[500] text-[13.56px] leading-[18.98px] text-bla'>Alex Ca.</p>
                       <p className='w-[29px] h-[17px] font-[400] text-[11.02px] leading-[16.52px] text-[#64748B]'>Alexy</p>
                      </div>
                    </div>
                    <div className='w-[55.95px] h-[43.78px] gap-[6.78px] flex flex-col justify-between items-end'>
                      <div className='w-[55.95px] h-[19px] gap-[1.69px] flex flex-row justify-between items-center'>
                        <div className='w-[15.25px] h-[15.25px] flex justify-center items-center'>
                          <div className='w-[7.94px] h-[13.03px] bg-weekly_users_eth'></div>
                        </div>
                      <p className='w-[39px] h-[19px] font-[600] text-[13.56px] leading-[18.98px] text-bla'>8,456</p>
                      </div>
                      <p className='w-[49px] h-[18px] font-[400] text-[11.86px] leading-[17.79px] text-[#10C352]'>+23,00%</p>
                    </div>
                  </div>
                  <div className='w-[277.09px] h-[54.23px] ml-[23.83px] mt-[17.65px] flex flex-row justify-between items-center'>
                    <div className='w-[116.32px] h-[42.78px] gap-[13.56px] flex flex-row justify-between items-center'>
                      <div className='w-[45.76px] h-[42.37px] relative'>
                        <div className='w-[40.67px] h-[40.67px] rounded-[847.37px] border-[1.69px] top-[0.2px] border-whi bg-weekly_users_2 absolute'></div>
                        <div className='w-[18.64px] h-[18.64px] bg-whi rounded-[100%] absolute top-[23.93px] left-[27.12px] flex justify-center items-center'>
                          <p className='w-[6px] h-[15px] font-[700] text-[10.17px] leading-[15.25px]'>2</p>
                        </div>
                      </div>
                      <div className='w-[57px] h-[42.78px] gap-[6.78px] flex flex-col justify-between'>
                        <p className='w-[57px] h-[19px] font-[600] text-[13.56px] leading-[18.98px] text-bla'>Juliya S.</p>
                        <p className='w-[39px] h-[17px] font-[400] text-[11.02px] leading-[16.52px] text-[#64748B]'>JuliyaS</p>
                      </div>
                    </div>
                    <div className='w-[52.95px] h-[43.78px] gap-[6.78px] flex flex-col justify-between items-end'>
                      <div className='w-[52.95px] h-[19px] gap-[1.69px] flex flex-row justify-between items-center'>
                        <div className='w-[15.25px] h-[15.25px] flex justify-center items-center'>
                          <div className='w-[7.94px] h-[13.03px] bg-weekly_users_eth'></div>
                        </div>
                        <p className='w-[36px] h-[19px] font-[600] text-[13.56px] leading-[18.98px] text-bla'>5,327</p>
                      </div>
                      <p className='w-[43px] h-[18px] font-[400] text-[11.86px] leading-[17.79px] text-[#E23333]'>-32,01%</p>
                    </div>
                  </div>
                </div>
              </div>
              {/*End - Block 3*/}
            </div>
            {/*End - Illustration*/}
          </div>
        </div>
        {/*End - UNLEASH*/}
        {/*Start - BANNER*/}
        <div className='w-[1245px] h-[311px] flex flex-row rounded-[30px] bg-bla mt-[180.92px] ml-[97px]'>
          <div className='w-[476px] h-[214.98px] mt-[44.22px] ml-[66px] flex flex-col'>
            <p className='w-[476px] h-[58px] font-[600] text-[45px] leading-[58.5px] tracking-[1%] text-whi'>Create and Sell NFTs</p>
            <p className='w-[264px] h-[26px] font-[500] text-[20.27px] leading-[26.35px] text-[#D4D4D4]/60 mt-[12.48px] tracking-[1%]'>World's Largest NFT Place</p>
            <div className='w-[396.62px] h-[67.66px] gap-[30.51px] mt-[50.84px] flex flex-row'>
              <button className='w-[183.06px] h-[67.66px] rounded-[12.2px] gap-[15.25px] bg-whi flex justify-center items-center'>
                <p className='font-[600] text-[21.36px] leading-[27.76px] tracking-[1%] text-bla'>Explore More</p>
              </button>
              <button className='w-[183.06px] h-[67.66px] rounded-[12.2px] border-[2.29px] border-whi gap-[15.25px] flex justify-center items-center'>
                <p className='font-[600] text-[21.36px] leading-[27.76px] tracking-[1%] text-whi'>Sell Artwork</p>
              </button>
            </div>
          </div>
          <div className='w-[390px] h-[264px] mt-[31px] ml-[291px] relative'>
            <div className='w-[390px] h-[249px] rounded-[7.55px] bg-banner_image_1_op absolute top-[15px]'></div>
            <div className='w-[369px] h-[249px] rounded-[15.79px] bg-image_1 absolute left-[12px]'></div>
          </div>
        </div>
        {/*End - BANNER*/}
        {/*Start - FOOTER*/}
        <div className='w-[1440px] h-[345px] mt-[160px] bg-bla flex flex-col'>
          <div className='w-[1248px] h-[65px] mt-[92px] ml-[96px] flex flex-row justify-between items-center'>
            <div className='w-[198.88px] h-[65px] flex flex-row justify-between items-center'>
              <div className='w-[65px] h-[65px] bg-footer_logo'></div>
              <p className='font-[600] text-[29.92px] leading-[38.9px] text-whi'>DiveSea</p>
            </div>
            <div className='w-[635px] h-[27px] flex flex-row justify-between'>
              <p className='font-[500] text-[17.83px] leading-[26.74px] text-[#B9B9B9]'>Privacy Policy</p>
              <p className='font-[500] text-[17.83px] leading-[26.74px] text-[#B9B9B9]'>Term & Conditions</p>
              <p className='font-[500] text-[17.83px] leading-[26.74px] text-[#B9B9B9]'>About Us</p>
              <p className='font-[500] text-[17.83px] leading-[26.74px] text-[#B9B9B9]'>Contact</p>
            </div>
          </div>
          <div className='w-[1246px] h-[1px] bg-[#818181]/25 mt-[25px] ml-[97px]'></div>
          <div className='w-[1237.62px] h-[25px] flex flex-row mt-[57px] ml-[103px] justify-between items-center'>
            <p className='font-[500] text-[17px] leading-[25px] text-[#999999]'>© 2023 EATLY All Rights Reserved.</p>
            <div className='w-[234.46px] h-[21.42px] flex flex-row justify-between'>
              <div className='w-[21.34px] h-[21.42px] bg-footer_insta'></div>
              <div className='w-[21.34px] h-[20.36px] bg-footer_in'></div>
              <div className='w-[9.88px] h-[21.34px] bg-footer_facebook'></div>
              <div className='w-[21.34px] h-[17.37px] bg-footer_twitter'></div>
            </div>
          </div>
        </div>
        {/*End - FOOTER*/}
    </div>
  )
}