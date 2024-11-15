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
          <div className='uppercase w-[91px] h-[27px] text-[#606060] text-[17.83px] leading-[26.74px] font-medium'>Discover</div>
          <div className='uppercase w-[95px] h-[27px] text-[#606060] text-[17.83px] leading-[26.74px] font-medium'>Creators</div>
          <div className='uppercase w-[43px] h-[27px] text-[#606060] text-[17.83px] leading-[26.74px] font-medium'>Sell</div>
          <div className='uppercase w-[56px] h-[27px] text-[#606060] text-[17.83px] leading-[26.74px] font-medium'>Stats</div>
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
          <p className='uppercase w-[151px] h-[25px] text-[16.17px] text-[#FFFFFF] leading-[24.26px] font-[600]'>Connect Wallet</p>
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
              <p className='text-[#141416] w-[567px] h-[180px] text-[75px] font-[600] leading-[90px] tracking-[-3px]
                            max-mobile:w-[310.94px] max-mobile:h-[114px] max-mobile:ml-[2.03px] max-mobile:text-[47.4px] max-mobile:font-[600] max-mobile:leading-[56.88px] max-mobile:tracking-[-1.9px] max-mobile:text-center'>Discover And Create NFTs</p>
              <p className='text-[#676767] w-[499px] h-[56px] ml-[2px] mt-[16px] text-[18px] font-[400] leading-[28px] text-justify
                            max-mobile:w-[315.36px] max-mobile:h-[36px] max-mobile:ml-[0px] max-mobile:mt-[9.87px] max-mobile:text-[11.38px] max-mobile:leading-[17.7px] max-mobile:text-center '>Discover, Create and Sell NFTs On Our NFT Marketplace With Over Thousands Of NFTs And Get a <span className='text-[#141416] font-[600] text-justify
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
              <p className='w-[118px] h-[46px] font-[600] text-[36.77px] leading-[45.96px] text-center text-[#141416]
                            max-mobile:hidden'>430K+</p>
              <p className='w-[59px] h-[19px] mt-[5.92px] ml-[0.85px] font-[500] text-[12.26px] leading-[18.39px] text-center text-[#848586]
                            max-mobile:hidden'>Art Works</p>
              <div className='min-mobile:hidden w-[98.48px] h-[24.18px] bg-reviews_1'></div>
            </div>
            <div className='w-[111px] h-[70.92px] ml-[65.28px] flex flex-col
                            max-mobile:w-[76.69px] max-mobile:h-[12.24px] max-mobile:ml-[16.01px] max-mobile:mt-[8.81px]'>
              <p className='w-[111px] h-[46px] font-[600] text-[36.77px] leading-[45.96px] text-center text-[#141416]
                            max-mobile:hidden'>159K+</p>
              <p className='w-[51px] h-[19px] mt-[5.92px] font-[500] text-[12.26px] leading-[18.39px] text-center text-[#848586]
                            max-mobile:hidden'>Creator</p>
              <div className='min-mobile:hidden w-[76.69px] h-[12.24px] bg-reviews_2'></div>
            </div>
            <div className='w-[94px] h-[70.92] ml-[64.69px] flex flex-col
                            max-mobile:w-[43px] max-mobile:h-[20px] max-mobile:ml-[7.38px] max-mobile:mt-[5.6px]'>
              <p className='w-[94px] h-[46px] font-[600] text-[36.77px] leading-[45.96px] text-center text-[#141416]
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
      <div className='w-[1565px] h-[989px] mt-[143.01px] relative'>
        <div className='w-[1565px] h-[873px] bg-[#F1F1F1]'>
          {/*Start - Main Text*/}
          <p className='w-[395px] h-[27px] pt-[70px] ml-[522px] font-[600] text-[45px] leading-[26.92px] text-[#C5C5C5]'>Weekly - Top NFT</p>
          {/*End - Main Text*/}
          {/*Start - Cards*/}
          <div className='w-[1565px] h-[402.28px] bg-black/10 mt-[100px]'>
            <div className='w-[1565px] h-[402.28px] gap-[13.37px]'>
              <div className='w-[1565px] h-[402.28px] gap-[39.84px] flex flex-row'>
                {/*Start - First Card*/}
                <div className='w-[281.13px] h-[402.28px] pt-[14.11px] bg-whi rounded-[23.48px] shadow-[38.82_11.76_58.81_0_rgba(199,199,199,0.6)]'>
                  <div className='w-[252.9px] h-[252.9px] ml-[14.12px] pt-[14.12px] rounded-[18.82px] bg-weekly_card_1'>
                    <div className='bg-[#1C1D20]/35 w-[116.58px] h-[37.64px] ml-[127.04px] rounded-[9.41px] border-[1.18px] border-[#1C1D20]/8 blur-[4.71] shadow-[0_4.71_14.12_0_rgba(28, 29, 32, 0.08)] flex justify-center items-center'>
                      <p className='w-[88px] h-[21px] font-[500] text-[14.12px] leading-[21.17px] text-whi'>07h 09m 12s</p>
                    </div>
                  </div>
                  <div className='w-[243.49px] h-[95.95px] mt-[18.82px] ml-[18.82px] flex flex-col justify-between'>
                    <p className='w-[113px] h-[30px] font-[600] text-[21.17px] leading-[29.64px] text-[#141416]'>Sun-Glass</p>
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
                      <button className='w-[121.74px] h-[51.76px] bg-[#141416] rounded-[11.76px] gap-[11.76px] flex justify-center items-center'>
                        <p className='w-[71px] h-[21px] font-[600] text-[14.12px] leading-[21.17px] text-whi'>PLACE BID</p>
                      </button>
                    </div>
                  </div>
                </div>
                {/*End - First Card*/}
                {/*Start - Second Card*/}
                <div className='w-[281.13px] h-[402.28px] pt-[14.11px] bg-whi rounded-[23.48px] shadow-[38.82_11.76_58.81_0_rgba(199,199,199,0.6)]'>
                  <div className='w-[252.9px] h-[252.9px] ml-[14.12px] pt-[14.12px] rounded-[18.82px] bg-weekly_card_2'>
                    <div className='bg-[#1C1D20]/35 w-[116.58px] h-[37.64px] ml-[127.04px] rounded-[9.41px] border-[1.18px] border-[#1C1D20]/8 blur-[4.71] shadow-[0_4.71_14.12_0_rgba(28, 29, 32, 0.08)] flex justify-center items-center'>
                      <p className='w-[88px] h-[21px] font-[500] text-[14.12px] leading-[21.17px] text-whi'>07h 09m 12s</p>
                    </div>
                  </div>
                  <div className='w-[243.49px] h-[95.95px] mt-[18.82px] ml-[18.82px] flex flex-col justify-between'>
                    <p className='w-[113px] h-[30px] font-[600] text-[21.17px] leading-[29.64px] text-[#141416]'>Sun-Glass</p>
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
                      <button className='w-[121.74px] h-[51.76px] bg-[#141416] rounded-[11.76px] gap-[11.76px] flex justify-center items-center'>
                        <p className='w-[71px] h-[21px] font-[600] text-[14.12px] leading-[21.17px] text-whi'>PLACE BID</p>
                      </button>
                    </div>
                  </div>
                </div>
                {/*End - Second Card*/}
                {/*Start - Third Card*/}
                <div className='w-[281.13px] h-[402.28px] pt-[14.11px] bg-whi rounded-[23.48px] shadow-[38.82_11.76_58.81_0_rgba(199,199,199,0.6)]'>
                  <div className='w-[252.9px] h-[252.9px] ml-[14.12px] pt-[14.12px] rounded-[18.82px] bg-weekly_card_3'>
                    <div className='bg-[#1C1D20]/35 w-[116.58px] h-[37.64px] ml-[127.04px] rounded-[9.41px] border-[1.18px] border-[#1C1D20]/8 blur-[4.71] shadow-[0_4.71_14.12_0_rgba(28, 29, 32, 0.08)] flex justify-center items-center'>
                      <p className='w-[88px] h-[21px] font-[500] text-[14.12px] leading-[21.17px] text-whi'>07h 09m 12s</p>
                    </div>
                  </div>
                  <div className='w-[243.49px] h-[95.95px] mt-[18.82px] ml-[18.82px] flex flex-col justify-between'>
                    <p className='w-[113px] h-[30px] font-[600] text-[21.17px] leading-[29.64px] text-[#141416]'>Sun-Glass</p>
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
                      <button className='w-[121.74px] h-[51.76px] bg-[#141416] rounded-[11.76px] gap-[11.76px] flex justify-center items-center'>
                        <p className='w-[71px] h-[21px] font-[600] text-[14.12px] leading-[21.17px] text-whi'>PLACE BID</p>
                      </button>
                    </div>
                  </div>
                </div>
                {/*End - Third Card*/}
                {/*Start - Fourth Card*/}
                <div className='w-[281.13px] h-[402.28px] pt-[14.11px] bg-whi rounded-[23.48px] shadow-[38.82_11.76_58.81_0_rgba(199,199,199,0.6)]'>
                  <div className='w-[252.9px] h-[252.9px] ml-[14.12px] pt-[14.12px] rounded-[18.82px] bg-weekly_card_4'>
                    <div className='bg-[#1C1D20]/35 w-[116.58px] h-[37.64px] ml-[127.04px] rounded-[9.41px] border-[1.18px] border-[#1C1D20]/8 blur-[4.71] shadow-[0_4.71_14.12_0_rgba(28, 29, 32, 0.08)] flex justify-center items-center'>
                      <p className='w-[88px] h-[21px] font-[500] text-[14.12px] leading-[21.17px] text-whi'>19h 09m 12s</p>
                    </div>
                  </div>
                  <div className='w-[243.49px] h-[95.95px] mt-[18.82px] ml-[18.82px] flex flex-col justify-between'>
                    <p className='w-[80px] h-[30px] font-[600] text-[21.17px] leading-[29.64px] text-[#141416]'>NuEvey</p>
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
                      <button className='w-[121.74px] h-[51.76px] bg-[#141416] rounded-[11.76px] gap-[11.76px] flex justify-center items-center'>
                        <p className='w-[71px] h-[21px] font-[600] text-[14.12px] leading-[21.17px] text-whi'>PLACE BID</p>
                      </button>
                    </div>
                  </div>
                </div>
                {/*End - Fourth Card*/}
                {/*Start - Fifth Card*/}
                <div className='w-[281.13px] h-[402.28px] pt-[14.11px] bg-whi rounded-[23.48px] shadow-[38.82_11.76_58.81_0_rgba(199,199,199,0.6)]'>
                  <div className='w-[252.9px] h-[252.9px] ml-[14.12px] pt-[14.12px] rounded-[18.82px] bg-weekly_card_5'>
                    <div className='bg-[#1C1D20]/35 w-[116.58px] h-[37.64px] ml-[127.04px] rounded-[9.41px] border-[1.18px] border-[#1C1D20]/8 blur-[4.71] shadow-[0_4.71_14.12_0_rgba(28, 29, 32, 0.08)] flex justify-center items-center'>
                      <p className='w-[88px] h-[21px] font-[500] text-[14.12px] leading-[21.17px] text-whi'>19h 09m 12s</p>
                    </div>
                  </div>
                  <div className='w-[243.49px] h-[95.95px] mt-[18.82px] ml-[18.82px] flex flex-col justify-between'>
                    <p className='w-[80px] h-[30px] font-[600] text-[21.17px] leading-[29.64px] text-[#141416]'>NuEvey</p>
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
                      <button className='w-[121.74px] h-[51.76px] bg-[#141416] rounded-[11.76px] gap-[11.76px] flex justify-center items-center'>
                        <p className='w-[71px] h-[21px] font-[600] text-[14.12px] leading-[21.17px] text-whi'>PLACE BID</p>
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
          <div className='w-[166px] h-[68.99px] ml-[637px] mt-[114.72px] bg-[#FCFCFD] rounded-[17.25px] gap-[10.78px] shadow-[0_43.12_34.49_-25.87_rgba(15,15,15,0.12)] flex justify-center items-center'>
            <div className='w-[122.88px] h-[25.87px] gap-[34.49px] flex flex-row'>
              <div className='w-[25.87px] h-[25.87px] flex items-center justify-center'>
                <div className='w-[15.09px] h-[9.7px] bg-weekly_left_arrow'></div>
              </div>
              <div className='w-[2.16px] h-[25.87px] rounded-[2.16px] bg-[#E6E8EC]'></div>
              <div className='w-[25.87px] h-[25.87px] flex items-center justify-center'>
                <div className='w-[15.09px] h-[9.7px] bg-weekly_right_arrow'></div>
              </div>
            </div>
          </div>
          {/*End - Arrows*/}
        </div>
        {/*Start - Users*/}
        <div className='w-[365px] h-[246px] bg-whi left-[976px] top-[743px] border-[1px] border-[#EDF2F7] rounded-[16px] shadow-[10_10_50_0_rgba(20,20,22,0.1)] absolute flex flex-col justify-between'>
          <div className='w-[363px] h-[54.37px] flex flex-row'>
            <p className='w-[161px] h-[28px] ml-[24px] mt-[26.37px] font-[600] text-[21px] leading-[28.35px] text-[#1A202C]'>Recent Viewed</p>
            <div className='w-[24px] h-[10.7px] ml-[132px] mt-[35.27px] flex justify-center items-center bg-points_3'></div>
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
                  <p className='w-[62px] h-[22px] font-[500] text-[15.36px] leading-[21.52px] text-[#141416]'>Alex Ca.</p>
                  <p className='w-[33px] h-[19px] font-[400] text-[12.48px] leading-[18.72px] text-[#64748B]'>Alexy</p>
                </div>
              </div>
              <div className='w-[63.2px] h-[49.68px] gap-[7.68px] flex flex-col justify-between items-end'>
                <div className='w-[63.2px] h-[22px] gap-[1.92px] flex flex-row justify-between items-center'>
                  <div className='w-[17.28px] h-[17.28px] flex justify-center items-center'>
                    <div className='w-[9px] h-[14.76px] bg-weekly_users_eth'></div>
                  </div>
                  <p className='w-[44px] h-[22px] font-[600] text-[15.36px] leading-[21.51px] text-[#141416]'>8,456</p>
                </div>
                <p className='w-[55px] h-[20px] font-[400] text-[13.44px] leading-[20.17px] text-[#10C352]'>+23,00%</p>
              </div>
            </div>
            {/*End - Alex Ca.*/}
            {/*Start - Juliya S.*/}
            <div className='w-[314px] h-[61.46px] ml-[27px] mt-[20px] flex flex-row justify-between items-center'>
              <div className='w-[132.22px] h-[48.68px] gap-[15.36px] flex flex-row justify-between items-center'>
                <div className='w-[51.85px] h-[48.01px] relative'>
                  <div className='w-[46.09] h-[46.09px] rounded-[960.24px] border-[1.92px] top-[0.33px] border-whi bg-weekly_users_2 absolute'></div>
                  <div className='w-[21.13px] h-[21.13px] bg-whi rounded-[100%] absolute top-[26.89px] left-[30.73px] flex justify-center items-center'>
                    <p className='w-[7px] h-[17px] font-[700] text-[11.52px] leading-[17.28px]'>2</p>
                  </div>
                </div>
                <div className='w-[65px] h-[48.68px] gap-[7.68px] flex flex-col justify-between'>
                  <p className='w-[65px] h-[22px] font-[600] text-[15.36px] leading-[21.51px] text-[#141416]'>Juliya S.</p>
                  <p className='w-[44px] h-[19px] font-[400] text-[12.48px] leading-[18.72px] text-[#64748B]'>JuliyaS</p>
                </div>
              </div>
              <div className='w-[60.2px] h-[49.68px] gap-[7.68px] flex flex-col justify-between items-end'>
                <div className='w-[60.2px] h-[22px] gap-[1.92px] flex flex-row justify-between items-center'>
                  <div className='w-[17.28px] h-[17.28px] flex justify-center items-center'>
                    <div className='w-[9px] h-[14.76px] bg-weekly_users_eth'></div>
                  </div>
                  <p className='w-[41px] h-[22px] font-[600] text-[15.36px] leading-[21.51px] text-[#141416]'>5,327</p>
                </div>
                <p className='w-[49px] h-[20px] font-[400] text-[13.44px] leading-[20.17px] text-[#E23333]'>-32,01%</p>
              </div>
            </div>
            {/*End - Juliya S.*/}
          </div>
        </div>
        {/*End - Users*/}
      </div>
    </div>
  )
}