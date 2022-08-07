<template>
  <div class="made">
    <div class="tv-play">
      <div class="download">
        <el-button type="primary"
                   @click="downLoad('电视背景框')"
                   size="mini">导出</el-button>
      </div>
      <div class="show-bench"
           @click="showBenchs">
        <i class="el-icon-view"></i>
      </div>
      <div class="wall"
           v-show="showWall">
        <img :src="wall" />
      </div>
      <div class="floor"
           v-show="showWall">
        <img :src="floor" />
      </div>
      <div class="bench"
           v-show="showBench">
        <img :src="require('@/assets/tv/back/电视柜.png')" />
      </div>
      <div class="tv">
        <div class="sound">
          <img :src="sound"
               v-show="showSound"
               alt="音响">
        </div>
        <div class="tvs"
             v-show="showTv">
          <img :src="tv" />
          <img :src="brand"
               class="logo"
               v-show="showBrand"
               alt="logo">
        </div>
        <div class="sound">
          <img :src="sound"
               v-show="showSound"
               alt="音响">
        </div>
      </div>
      <el-scrollbar class="side"
                    :style="{width: showSide?'18%':'0'}"
                    v-if="_isMobile === null">
        <div class="side-head"
             v-if="sideSelect === 0">
          <div class="head">
            <el-image :src="require('@/assets/tv/images/三步定制背景_03.jpg')"></el-image>
            <el-image :src="require('@/assets/tv/images/三步_icon_06.jpg')"
                      class="icon"></el-image>
            <h5 class="name">三步定制电视墙</h5>
          </div>
          <div class="sizes"
               @click="toDetail('brands')">
            <el-image :src="require('@/assets/tv/images/尺寸选择.png')"></el-image>
            <span class="name">1.电视尺寸选择</span>
          </div>
          <div class="walls"
               @click="toDetail('walls')">
            <el-image :src="require('@/assets/tv/images/背景墙选择.png')"></el-image>
            <span class="name">2.电视墙效果选择</span>
          </div>
          <div class="sounds"
               @click="toDetail('sounds')">
            <el-image :src="require('@/assets/tv/images/产品选择.png')"></el-image>
            <span class="name">3.音箱型号选择</span>
          </div>
        </div>
        <div class="side-brands"
             v-else-if="sideSelect === 1">
          <div class="head">
            <span>电视品牌</span>
            <i class="el-icon-arrow-left"
               @click="sideSelect = 0"></i>
          </div>
          <div class="con">
            <div class="tent"
                 v-for="(item,index) in brandData"
                 :key="index"
                 :class="brandSelect === index?'gray':'white'"
                 @click="brandChange(item,index)">
              <el-image :src="item.image"></el-image>
              <span>{{ item.name }}</span>
            </div>
          </div>
        </div>
        <div class="side-tvs"
             v-else-if="sideSelect === 2">
          <div class="head">
            <span>{{logo}}</span>
            <i class="el-icon-arrow-left"
               @click="sideSelect = 1"></i>
          </div>
          <div class="con">
            <div class="tent"
                 v-for="(item,index) in tvDataCL"
                 :key="index">
              <div class="group">
                <div class="cons"
                     v-for="(ite,inde) in item"
                     :key="inde"
                     @click="tvsChange(ite,index)">
                  <el-image :src="require('@/assets/tv/images/电视_06.png')"
                            class="tv-image"
                            :class="tvSelect === ite.name?'gray':'grat'"></el-image>
                  <span>{{ ite.name }}</span>
                </div>
              </div>
              <div class="trans"
                   v-if="tvImpeSelect === index">
                <h5>规格参数</h5>
                <p>颜色：{{ tvForm.tvColor }}</p>
                <p>阻抗：{{ tvForm.tvImpe }}</p>
                <p>功率：{{ tvForm.tvPower }}</p>
                <p>灵敏度：{{ tvForm.tvSen }}</p>
                <p>频率响应：{{ tvForm.tvFreq }}</p>
                <p>高音：{{ tvForm.tvPitch }}</p>
                <p>低音：{{ tvForm.tvBass }}</p>
                <p>分频点：{{ tvForm.tvPoint }}</p>
                <p>音响尺寸：{{ tvForm.tvMeas }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="side-walls"
             v-else-if="sideSelect === 3">
          <div class="head">
            <span>背景墙颜色</span>
            <i class="el-icon-arrow-left"
               @click="sideSelect = 0"></i>
          </div>
          <div class="con">
            <div class="tent"
                 v-for="(item,index) in wallData"
                 :key="index"
                 @click="wallsChange(item,index)">
              <el-image :src="item.image1"></el-image>
              <span>{{ item.name }}</span>
            </div>
          </div>
        </div>
        <div class="side-sounds"
             v-else-if="sideSelect === 4">
          <div class="head">
            <span>音箱型号</span>
            <i class="el-icon-arrow-left"
               @click="sideSelect = 0"></i>
          </div>
          <div class="con">
            <div class="tent"
                 v-for="(item,index) in soundDataCL"
                 :key="index">
              <div class="group">
                <div class="cons"
                     v-for="(ite,inde) in item"
                     :key="inde"
                     @click="soundsChange(ite,index)">
                  <el-image :src="ite.image1"></el-image>
                  <span>{{ ite.name }}</span>
                </div>
              </div>
              <div class="trans"
                   v-if="soundImpeSelect === index">
                <h5>规格参数</h5>
                <p>颜色：{{ soundForm.soundColor }}</p>
                <p>阻抗：{{ soundForm.soundImpe }}</p>
                <p>功率：{{ soundForm.soundPower }}</p>
                <p>灵敏度：{{ soundForm.soundSen }}</p>
                <p>频率响应：{{ soundForm.soundFreq }}</p>
                <p>高音：{{ soundForm.soundPitch }}</p>
                <p>低音：{{ soundForm.soundBass }}</p>
                <p>分频点：{{ soundForm.soundPoint }}</p>
                <p>音响尺寸：{{ soundForm.soundMeas }}</p>
              </div>
            </div>
          </div>
        </div>
        <div v-else>遗留待开发功能</div>
      </el-scrollbar>
      <div class="show-side"
           :style="{left: showSide?'18%':'0'}"
           v-if="_isMobile === null"
           @click="showSide = !showSide">
        <i class="el-icon-arrow-left"></i>
      </div>

    </div>
    <div class="moboile-side"
         v-if="_isMobile !== null">
      <div class="side-head"
           v-if="sideSelect === 0">
        <div class="head">
          <el-image :src="require('@/assets/tv/images/三步定制背景_03.jpg')"
                    style="width: 100%"></el-image>
          <el-image :src="require('@/assets/tv/images/三步_icon_06.jpg')"
                    class="icon"></el-image>
          <h5 class="name">三步定制电视墙</h5>
        </div>
        <div class="sizes"
             @click="toDetail('brands')">
          <el-image :src="require('@/assets/tv/images/尺寸选择.png')"></el-image>
          <span class="name">1.电视尺寸选择</span>
        </div>
        <div class="walls"
             @click="toDetail('walls')">
          <el-image :src="require('@/assets/tv/images/背景墙选择.png')"></el-image>
          <span class="name">2.电视墙效果选择</span>
        </div>
        <div class="sounds"
             @click="toDetail('sounds')">
          <el-image :src="require('@/assets/tv/images/产品选择.png')"></el-image>
          <span class="name">3.音箱型号选择</span>
        </div>
      </div>
      <div class="side-brands"
           v-else-if="sideSelect === 1">
        <div class="head">
          <span>电视品牌</span>
          <i class="el-icon-arrow-left"
             @click="sideSelect = 0"></i>
        </div>
        <div class="con">
          <div class="tent"
               v-for="(item,index) in brandData"
               :key="index"
               :class="brandSelect === index?'gray':'white'"
               @click="brandChange(item,index)">
            <el-image :src="item.image"></el-image>
            <span>{{ item.name }}</span>
          </div>
        </div>
      </div>
      <div class="side-tvs"
           v-else-if="sideSelect === 2">
        <div class="head">
          <span>{{logo}}</span>
          <i class="el-icon-arrow-left"
             @click="sideSelect = 1"></i>
        </div>
        <div class="con">
          <div class="tent"
               v-for="(item,index) in tvDataCL"
               :key="index">
            <div class="group">
              <div class="cons"
                   v-for="(ite,inde) in item"
                   :key="inde"
                   @click="tvsChange(ite,index)">
                <el-image :src="require('@/assets/tv/images/电视_06.png')"
                          class="tv-image"
                          :class="tvSelect === ite.name?'gray':'grat'"></el-image>
                <span>{{ ite.name }}</span>
              </div>
            </div>
            <div class="trans"
                 v-if="tvImpeSelect === index">
              <h5>规格参数</h5>
              <p>颜色：{{ tvForm.tvColor }}</p>
              <p>阻抗：{{ tvForm.tvImpe }}</p>
              <p>功率：{{ tvForm.tvPower }}</p>
              <p>灵敏度：{{ tvForm.tvSen }}</p>
              <p>频率响应：{{ tvForm.tvFreq }}</p>
              <p>高音：{{ tvForm.tvPitch }}</p>
              <p>低音：{{ tvForm.tvBass }}</p>
              <p>分频点：{{ tvForm.tvPoint }}</p>
              <p>音响尺寸：{{ tvForm.tvMeas }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="side-walls"
           v-else-if="sideSelect === 3">
        <div class="head">
          <span>背景墙颜色</span>
          <i class="el-icon-arrow-left"
             @click="sideSelect = 0"></i>
        </div>
        <div class="con">
          <div class="tent"
               v-for="(item,index) in wallData"
               :key="index"
               @click="wallsChange(item,index)">
            <el-image :src="item.image1"></el-image>
            <span>{{ item.name }}</span>
          </div>
        </div>
      </div>
      <div class="side-sounds"
           v-else-if="sideSelect === 4">
        <div class="head">
          <span>音箱型号</span>
          <i class="el-icon-arrow-left"
             @click="sideSelect = 0"></i>
        </div>
        <div class="con">
          <div class="tent"
               v-for="(item,index) in soundDataCL"
               :key="index">
            <div class="group">
              <div class="cons"
                   v-for="(ite,inde) in item"
                   :key="inde"
                   @click="soundsChange(ite,index)">
                <el-image :src="ite.image1"
                          class="tv-image"></el-image>
                <span>{{ ite.name }}</span>
              </div>
            </div>
            <div class="trans"
                 v-if="soundImpeSelect === index">
              <h5>规格参数</h5>
              <p>颜色：{{ soundForm.soundColor }}</p>
              <p>阻抗：{{ soundForm.soundImpe }}</p>
              <p>功率：{{ soundForm.soundPower }}</p>
              <p>灵敏度：{{ soundForm.soundSen }}</p>
              <p>频率响应：{{ soundForm.soundFreq }}</p>
              <p>高音：{{ soundForm.soundPitch }}</p>
              <p>低音：{{ soundForm.soundBass }}</p>
              <p>分频点：{{ soundForm.soundPoint }}</p>
              <p>音响尺寸：{{ soundForm.soundMeas }}</p>
            </div>
          </div>
        </div>
      </div>
      <div v-else>遗留待开发功能</div>
    </div>
  </div>
</template>
<script>
import html2canvas from 'html2canvas' // 引入插件
export default {
  data () {
    return {
      showBench: false, // 是否显示电视柜
      showTv: false, // 是否显示电视机
      showSound: false, // 是否显示音响
      showWall: false, // 是否显示背景墙
      showBrand: false, // 是否显示logo
      showSide: false, // 是否显示侧边栏
      brandSelect: null, // 选中的品牌
      tvSelect: null, // 选中的电视尺寸
      tvImpeSelect: null, // 选中的电视尺寸参数
      tvForm: {
        tvColor: '', // 选中的规格参数 - 颜色
        tvImpe: '', // 选中的规格参数 - 阻抗
        tvPower: '', // 选中的规格参数 - 功率
        tvSen: '', // 选中的规格参数 - 灵敏度
        tvFreq: '', // 选中的规格参数 - 频率响应
        tvPitch: '', // 选中的规格参数 - 高音
        tvBass: '', // 选中的规格参数 - 低音
        tvPoint: '', // 选中的规格参数 - 分频点
        tvMeas: '' // 选中的规格参数 - 音响尺寸
      },
      wallSelect: null, // 选中的背景墙颜色
      soundSelect: null, // 选中的音箱
      soundImpeSelect: null, // 选中的音箱参数
      soundForm: {
        soundColor: '', // 选中的规格参数 - 颜色
        soundImpe: '', // 选中的规格参数 - 阻抗
        soundPower: '', // 选中的规格参数 - 功率
        soundSen: '', // 选中的规格参数 - 灵敏度
        soundFreq: '', // 选中的规格参数 - 频率响应
        soundPitch: '', // 选中的规格参数 - 高音
        soundBass: '', // 选中的规格参数 - 低音
        soundPoint: '', // 选中的规格参数 - 分频点
        soundMeas: '' // 选中的规格参数 - 音响尺寸
      },
      sideSelect: 0, // 侧边栏的页数（0 主页、1 品牌页、2 电视尺寸页、3 音响页、4 墙面页）
      logo: '', // 电视品牌名称
      tv: require('@/assets/tv/电视尺寸/75.png'), // 电视机
      sound: require('@/assets/tv/产品/产品大/OW1.5-YEL.png'), // 音响
      brand: require('@/assets/tv/品牌logo/HKC.png'), // 品牌
      wall: require('@/assets/tv/墙面/白墙.jpg'), // 背景墙
      floor: '', // 选中的地面
      wallData: [// 背景墙的所有数据
        {
          id: 1,
          name: '白墙',
          image1: require('@/assets/tv/墙面/白墙.png'),
          image2: require('@/assets/tv/墙面/白墙.jpg'),
          floor: require('@/assets/tv/地面/Slide1-WhiteHardwood-1.jpg')
        },
        {
          id: 2,
          name: '布兰迪灰',
          image1: require('@/assets/tv/墙面/布兰迪灰.png'),
          image2: require('@/assets/tv/墙面/布兰迪灰.jpg'),
          floor: require('@/assets/tv/地面/Slide2-BrownHardwood.jpg')
        },
        {
          id: 3,
          name: '大理石',
          image1: require('@/assets/tv/墙面/大理石.png'),
          image2: require('@/assets/tv/墙面/大理石.jpg'),
          floor: require('@/assets/tv/地面/Slide3-WhiteTile.jpg')
        },
        {
          id: 4,
          name: '仿古砖',
          image1: require('@/assets/tv/墙面/仿古砖.png'),
          image2: require('@/assets/tv/墙面/仿古砖.jpg'),
          floor: require('@/assets/tv/地面/Slide4-Whitefloortile.jpg')
        },
        {
          id: 5,
          name: '青蓝',
          image1: require('@/assets/tv/墙面/青蓝.png'),
          image2: require('@/assets/tv/墙面/青蓝.jpg'),
          floor: require('@/assets/tv/地面/Slide4-Whitefloortile.jpg')
        }
      ],
      tvData: [// 电视尺寸数据
        {
          id: 1,
          name: '55英寸',
          image: require('@/assets/tv/电视尺寸/55.png'),
          tvColor: '黑色哑光1',
          tvImpe: '6 Qdfksj',
          tvPower: '100W/瓦',
          tvSen: '90DB / 分贝',
          tvFreq: '40Hz - 40kHz',
          tvPitch: '1寸',
          tvBass: 'Kefdsaf',
          tvPoint: '2.5kHz',
          tvMeas: '320x160x65mm'
        },
        {
          id: 2,
          name: '65英寸',
          image: require('@/assets/tv/电视尺寸/65.png'),
          tvColor: '黑色哑光2',
          tvImpe: '6 Qdfksj',
          tvPower: '100W/瓦',
          tvSen: '90DB / 分贝',
          tvFreq: '40Hz - 40kHz',
          tvPitch: '1寸',
          tvBass: 'Kefdsaf',
          tvPoint: '2.5kHz',
          tvMeas: '320x160x65mm'
        },
        {
          id: 3,
          name: '75英寸',
          image: require('@/assets/tv/电视尺寸/75.png'),
          tvColor: '黑色哑光3',
          tvImpe: '6 Qdfksj',
          tvPower: '100W/瓦',
          tvSen: '90DB / 分贝',
          tvFreq: '40Hz - 40kHz',
          tvPitch: '1寸',
          tvBass: 'Kefdsaf',
          tvPoint: '2.5kHz',
          tvMeas: '320x160x65mm'
        },
        {
          id: 4,
          name: '85英寸',
          image: require('@/assets/tv/电视尺寸/85.png'),
          tvColor: '黑色哑光4',
          tvImpe: '6 Qdfksj',
          tvPower: '100W/瓦',
          tvSen: '90DB / 分贝',
          tvFreq: '40Hz - 40kHz',
          tvPitch: '1寸',
          tvBass: 'Kefdsaf',
          tvPoint: '2.5kHz',
          tvMeas: '320x160x65mm'
        },
        {
          id: 5,
          name: '95英寸',
          image: require('@/assets/tv/电视尺寸/95.png'),
          tvColor: '黑色哑光5',
          tvImpe: '6 Qdfksj',
          tvPower: '100W/瓦',
          tvSen: '90DB / 分贝',
          tvFreq: '40Hz - 40kHz',
          tvPitch: '1寸',
          tvBass: 'Kefdsaf',
          tvPoint: '2.5kHz',
          tvMeas: '320x160x65mm'
        },
        {
          id: 6,
          name: '100英寸',
          image: require('@/assets/tv/电视尺寸/100.png'),
          tvColor: '黑色哑光6',
          tvImpe: '6 Qdfksj',
          tvPower: '100W/瓦',
          tvSen: '90DB / 分贝',
          tvFreq: '40Hz - 40kHz',
          tvPitch: '1寸',
          tvBass: 'Kefdsaf',
          tvPoint: '2.5kHz',
          tvMeas: '320x160x65mm'
        },
        {
          id: 7,
          name: '120英寸',
          image: require('@/assets/tv/电视尺寸/120.png'),
          tvColor: '黑色哑光7',
          tvImpe: '6 Qdfksj',
          tvPower: '100W/瓦',
          tvSen: '90DB / 分贝',
          tvFreq: '40Hz - 40kHz',
          tvPitch: '1寸',
          tvBass: 'Kefdsaf',
          tvPoint: '2.5kHz',
          tvMeas: '320x160x65mm'
        }
      ],
      brandData: [// 电视机品牌数据
        {
          id: 1,
          name: 'HKC',
          image: require('@/assets/tv/品牌logo/HKC.png')
        },
        {
          id: 2,
          name: 'JVC',
          image: require('@/assets/tv/品牌logo/JVC.png')
        },
        {
          id: 3,
          name: 'LG',
          image: require('@/assets/tv/品牌logo/LG.png')
        },
        {
          id: 4,
          name: 'TCL',
          image: require('@/assets/tv/品牌logo/TCL.png')
        },
        {
          id: 5,
          name: '创维',
          image: require('@/assets/tv/品牌logo/创维.png')
        }, {
          id: 6,
          name: '东芝',
          image: require('@/assets/tv/品牌logo/东芝.png')
        },
        {
          id: 7,
          name: '飞利浦',
          image: require('@/assets/tv/品牌logo/飞利浦.png')
        },
        {
          id: 8,
          name: '光峰',
          image: require('@/assets/tv/品牌logo/光峰.png')
        },
        {
          id: 9,
          name: '海尔',
          image: require('@/assets/tv/品牌logo/海尔.png')
        },
        {
          id: 10,
          name: '海信',
          image: require('@/assets/tv/品牌logo/海信.png')
        },
        {
          id: 11,
          name: '华为',
          image: require('@/assets/tv/品牌logo/华为.png')
        },
        {
          id: 12,
          name: '康健',
          image: require('@/assets/tv/品牌logo/康健.png')
        },
        {
          id: 13,
          name: '丽唯',
          image: require('@/assets/tv/品牌logo/丽唯.png')
        },
        {
          id: 14,
          name: '三星',
          image: require('@/assets/tv/品牌logo/三星.png')
        },
        {
          id: 15,
          name: '三洋',
          image: require('@/assets/tv/品牌logo/三洋.png')
        },
        {
          id: 16,
          name: '松下',
          image: require('@/assets/tv/品牌logo/松下.png')
        },
        {
          id: 17,
          name: '索尼',
          image: require('@/assets/tv/品牌logo/索尼.png')
        },
        {
          id: 18,
          name: '夏普',
          image: require('@/assets/tv/品牌logo/夏普.png')
        },
        {
          id: 19,
          name: '小米',
          image: require('@/assets/tv/品牌logo/小米.png')
        },
        {
          id: 20,
          name: '长虹',
          image: require('@/assets/tv/品牌logo/长虹.png')
        }
      ],
      soundData: [// 音响数据
        {
          id: 1,
          name: 'LIVIA300',
          image1: require('@/assets/tv/产品/产品小/LIVIA300.jpg'),
          image2: require('@/assets/tv/产品/产品大/丽唯300.png'),
          soundColor: '黑色哑光1',
          soundImpe: '6 Qdfksj',
          soundPower: '100W/瓦',
          soundSen: '90DB / 分贝',
          soundFreq: '40Hz - 40kHz',
          soundPitch: '1寸',
          soundBass: 'Kefdsaf',
          soundPoint: '2.5kHz',
          soundMeas: '320x160x65mm'
        },
        {
          id: 2,
          name: 'LIVIA400',
          image1: require('@/assets/tv/产品/产品小/LIVIA400.jpg'),
          image2: require('@/assets/tv/产品/产品大/丽唯400.png'),
          soundColor: '黑色哑光2',
          soundImpe: '6 Qdfksj',
          soundPower: '100W/瓦',
          soundSen: '90DB / 分贝',
          soundFreq: '40Hz - 40kHz',
          soundPitch: '1寸',
          soundBass: 'Kefdsaf',
          soundPoint: '2.5kHz',
          soundMeas: '320x160x65mm'
        },
        {
          id: 3,
          name: 'OW1.5-4-BLK',
          image1: require('@/assets/tv/产品/产品小/OW1.5-4-BLK.jpg'),
          image2: require('@/assets/tv/产品/产品大/OW-BLK.png'),
          soundColor: '黑色哑光3',
          soundImpe: '6 Qdfksj',
          soundPower: '100W/瓦',
          soundSen: '90DB / 分贝',
          soundFreq: '40Hz - 40kHz',
          soundPitch: '1寸',
          soundBass: 'Kefdsaf',
          soundPoint: '2.5kHz',
          soundMeas: '320x160x65mm'
        },
        {
          id: 4,
          name: 'OW1.5-4-WHT',
          image1: require('@/assets/tv/产品/产品小/OW1.5-4-WHT.jpg'),
          image2: require('@/assets/tv/产品/产品大/OW-BLK.png'),
          soundColor: '黑色哑光4',
          soundImpe: '6 Qdfksj',
          soundPower: '100W/瓦',
          soundSen: '90DB / 分贝',
          soundFreq: '40Hz - 40kHz',
          soundPitch: '1寸',
          soundBass: 'Kefdsaf',
          soundPoint: '2.5kHz',
          soundMeas: '320x160x65mm'
        },
        {
          id: 5,
          name: 'OW1.5-4-YEL',
          image1: require('@/assets/tv/产品/产品小/OW1.5-4-YEL.jpg'),
          image2: require('@/assets/tv/产品/产品大/OW-YEL.png'),
          soundColor: '黑色哑光5',
          soundImpe: '6 Qdfksj',
          soundPower: '100W/瓦',
          soundSen: '90DB / 分贝',
          soundFreq: '40Hz - 40kHz',
          soundPitch: '1寸',
          soundBass: 'Kefdsaf',
          soundPoint: '2.5kHz',
          soundMeas: '320x160x65mm'
        },
        {
          id: 6,
          name: 'OW-4-BLK',
          image1: require('@/assets/tv/产品/产品小/OW-4-BLK.jpg'),
          image2: require('@/assets/tv/产品/产品大/OW-YEL.png'),
          soundColor: '黑色哑光6',
          soundImpe: '6 Qdfksj',
          soundPower: '100W/瓦',
          soundSen: '90DB / 分贝',
          soundFreq: '40Hz - 40kHz',
          soundPitch: '1寸',
          soundBass: 'Kefdsaf',
          soundPoint: '2.5kHz',
          soundMeas: '320x160x65mm'
        },
        {
          id: 7,
          name: 'OW-4-WHT',
          image1: require('@/assets/tv/产品/产品小/OW-4-WHT.jpg'),
          image2: require('@/assets/tv/产品/产品大/OW-WHT.png'),
          soundColor: '黑色哑光7',
          soundImpe: '6 Qdfksj',
          soundPower: '100W/瓦',
          soundSen: '90DB / 分贝',
          soundFreq: '40Hz - 40kHz',
          soundPitch: '1寸',
          soundBass: 'Kefdsaf',
          soundPoint: '2.5kHz',
          soundMeas: '320x160x65mm'
        },
        {
          id: 8,
          name: 'OW-4-YEL',
          image1: require('@/assets/tv/产品/产品小/OW-4-YEL.jpg'),
          image2: require('@/assets/tv/产品/产品大/OW-YEL.png'),
          soundColor: '黑色哑光8',
          soundImpe: '6 Qdfksj',
          soundPower: '100W/瓦',
          soundSen: '90DB / 分贝',
          soundFreq: '40Hz - 40kHz',
          soundPitch: '1寸',
          soundBass: 'Kefdsaf',
          soundPoint: '2.5kHz',
          soundMeas: '320x160x65mm'
        },
        {
          id: 9,
          name: 'OWLCR-4-BLK',
          image1: require('@/assets/tv/产品/产品小/OWLCR-4-BLK.jpg'),
          image2: require('@/assets/tv/产品/产品大/OW-WHT.png'),
          soundColor: '黑色哑光9',
          soundImpe: '6 Qdfksj',
          soundPower: '100W/瓦',
          soundSen: '90DB / 分贝',
          soundFreq: '40Hz - 40kHz',
          soundPitch: '1寸',
          soundBass: 'Kefdsaf',
          soundPoint: '2.5kHz',
          soundMeas: '320x160x65mm'
        },
        {
          id: 10,
          name: 'OWLCR-4-WHT',
          image1: require('@/assets/tv/产品/产品小/OWLCR-4-WHT.jpg'),
          image2: require('@/assets/tv/产品/产品大/OW-WHT.png'),
          soundColor: '黑色哑光10',
          soundImpe: '6 Qdfksj',
          soundPower: '100W/瓦',
          soundSen: '90DB / 分贝',
          soundFreq: '40Hz - 40kHz',
          soundPitch: '1寸',
          soundBass: 'Kefdsaf',
          soundPoint: '2.5kHz',
          soundMeas: '320x160x65mm'
        }, {
          id: 11,
          name: 'OWLCR-4-YEL',
          image1: require('@/assets/tv/产品/产品小/OWLCR-4-YEL.jpg'),
          image2: require('@/assets/tv/产品/产品大/OW-YEL.png'),
          soundColor: '黑色哑光11',
          soundImpe: '6 Qdfksj',
          soundPower: '100W/瓦',
          soundSen: '90DB / 分贝',
          soundFreq: '40Hz - 40kHz',
          soundPitch: '1寸',
          soundBass: 'Kefdsaf',
          soundPoint: '2.5kHz',
          soundMeas: '320x160x65mm'
        },
        {
          id: 12,
          name: 'OWLCR-5-BLK',
          image1: require('@/assets/tv/产品/产品小/OWLCR-5-BLK.jpg'),
          image2: require('@/assets/tv/产品/产品大/OW-BLK.png'),
          soundColor: '黑色哑光12',
          soundImpe: '6 Qdfksj',
          soundPower: '100W/瓦',
          soundSen: '90DB / 分贝',
          soundFreq: '40Hz - 40kHz',
          soundPitch: '1寸',
          soundBass: 'Kefdsaf',
          soundPoint: '2.5kHz',
          soundMeas: '320x160x65mm'
        },
        {
          id: 13,
          name: 'OWLCR-5-RED',
          image1: require('@/assets/tv/产品/产品小/OWLCR-5-RED.jpg'),
          image2: require('@/assets/tv/产品/产品大/OW-BLK.png'),
          soundColor: '黑色哑光13',
          soundImpe: '6 Qdfksj',
          soundPower: '100W/瓦',
          soundSen: '90DB / 分贝',
          soundFreq: '40Hz - 40kHz',
          soundPitch: '1寸',
          soundBass: 'Kefdsaf',
          soundPoint: '2.5kHz',
          soundMeas: '320x160x65mm'
        },
        {
          id: 14,
          name: 'OWLCR-5-WHT',
          image1: require('@/assets/tv/产品/产品小/OWLCR-5-WHT.jpg'),
          image2: require('@/assets/tv/产品/产品大/OW-WHT.png'),
          soundColor: '黑色哑光14',
          soundImpe: '6 Qdfksj',
          soundPower: '100W/瓦',
          soundSen: '90DB / 分贝',
          soundFreq: '40Hz - 40kHz',
          soundPitch: '1寸',
          soundBass: 'Kefdsaf',
          soundPoint: '2.5kHz',
          soundMeas: '320x160x65mm'
        }
      ]
    }
  },
  computed: {
    tvDataCL () {
      // 电视尺寸数据单数组变多数组
      let index = 0
      const subLength = 3
      const newArray = []
      while (index < this.tvData.length) {
        newArray.push(this.tvData.slice(index, index += subLength))
      }
      return newArray
    },
    soundDataCL () {
      // 音响数据单数组变多数组
      let index = 0
      const subLength = 3
      const newArray = []
      while (index < this.soundData.length) {
        newArray.push(this.soundData.slice(index, index += subLength))
      }
      return newArray
    },
    _isMobile () {
      // 判断设备是否是手机
      const flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
      return flag
    }
  },
  methods: {
    showBenchs () {
      // 显示、隐藏电视柜子
      this.showBench = !this.showBench
    },
    toDetail (name) {
      // 切换电视尺寸-电视墙-音箱选择
      switch (name) {
        case 'head':
          // 首页
          this.sideSelect = 0
          break
        case 'brands':
          // 品牌页
          this.sideSelect = 1
          break
        case 'tvs':
          // 电视尺寸页
          this.sideSelect = 2
          break
        case 'walls':
          // 墙面页
          this.sideSelect = 3
          break
        case 'sounds':
          // 音箱页
          this.sideSelect = 4
          break
        default:
          break
      }
    },
    brandChange (item, index) {
      // 切换电视品牌数据
      this.showBrand = true
      this.brandSelect = index
      this.brand = item.image
      this.logo = item.name
      this.toDetail('tvs')
    },
    tvsChange (item, index) {
      // 切换电视尺寸数据
      this.showTv = true
      this.tvSelect = item.name
      this.tv = item.image
      this.tvImpeSelect = index
      this.tvForm.tvColor = item.tvColor
      this.tvForm.tvImpe = item.tvImpe
      this.tvForm.tvPower = item.tvPower
      this.tvForm.tvSen = item.tvSen
      this.tvForm.tvFreq = item.tvFreq
      this.tvForm.tvPitch = item.tvPitch
      this.tvForm.tvBass = item.tvBass
      this.tvForm.tvPoint = item.tvPoint
      this.tvForm.tvMeas = item.tvMeas
    },
    wallsChange (item, index) {
      // 切换电视墙面数据
      this.showWall = true
      this.wallSelect = index
      this.wall = item.image2
      this.floor = item.floor
    },
    soundsChange (item, index) {
      // 切换音箱数据
      this.showSound = true
      this.soundSelect = index
      this.sound = item.image2
      this.soundColor = item.color
      this.soundImpe = item.impe
      this.soundImpeSelect = index
      this.soundForm.soundColor = item.soundColor
      this.soundForm.soundImpe = item.soundImpe
      this.soundForm.soundPower = item.soundPower
      this.soundForm.soundSen = item.soundSen
      this.soundForm.soundFreq = item.soundFreq
      this.soundForm.soundPitch = item.soundPitch
      this.soundForm.soundBass = item.soundBass
      this.soundForm.soundPoint = item.soundtvPoint
      this.soundForm.soundMeas = item.soundMeas
    },
    downLoad (name) {
      // 导出jpg图片
      document.documentElement.scrollTop = 0
      this.downloadResult(name)
    },
    dataURLToBlob (dataurl) {
      // 切换成blob格式的数据
      var arr = dataurl.split(','); var mime = arr[0].match(/:(.*?);/)[1]
      var bstr = atob(arr[1]); var n = bstr.length; var u8arr = new Uint8Array(n)
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n)
      }
      return new Blob([u8arr], { type: mime })
    },
    downloadResult (name) {
      // 利用canvas绘制图片
      const canvasID = document.body
      const a = document.createElement('a')
      html2canvas(canvasID).then(canvas => {
        const dom = document.body.appendChild(canvas)
        dom.style.display = 'none'
        a.style.display = 'none'
        document.body.removeChild(dom)
        const blob = this.dataURLToBlob(dom.toDataURL('image/jpg'))
        a.setAttribute('href', URL.createObjectURL(blob))
        a.setAttribute('download', name + '.jpg')
        document.body.appendChild(a)
        a.click()
        URL.revokeObjectURL(blob)
        document.body.removeChild(a)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.made {
  min-height: 700px;
  min-width: 1200px;
  width: 100vw;
  height: 100vh;
  position: relative;
  .tv-play {
    width: 100%;
    height: 100%;
    background: url(~@/assets/tv/back/内容背景.png);
    background-size: 100% 100%;
    position: relative;
    .show-bench {
      position: absolute;
      right: 80px;
      bottom: 30px;
      background: #fff;
      padding: 5px 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      &::before {
        content: "显示/隐藏电视柜";
        position: absolute;
        top: -26px;
        left: -60px;
        width: 150px;
        font-size: 14px;
        background: rgba(0, 0, 0, 0.6);
        color: #fff;
        padding: 3px 0;
      }
      &:hover {
        color: #4183fe;
        opacity: 0.9;
      }
    }
    .bench {
      position: absolute;
      width: 50%;
      left: 0;
      bottom: 11%;
      right: 0;
      margin: 0 auto;
      z-index: 3;
    }
    .download {
      position: absolute;
      right: 200px;
      bottom: 30px;
    }
    .wall {
      position: absolute;
      left: 5.2%;
      top: 9.4%;
      width: 89.6%;
      height: 74.9%;
      z-index: 2;
    }
    .floor {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .bench,
    .wall {
      img {
        width: 100%;
        height: 100%;
      }
    }
    .tv {
      position: absolute;
      z-index: 4;
      left: 0;
      right: 0;
      margin: 0 auto;
      bottom: 20%;
      transform: scale(0.7, 0.7);
      display: flex;
      justify-content: center;
      .tvs {
        position: relative;
        .logo {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 10%;
          margin: auto;
        }
      }
      .sound {
        display: flex;
        align-items: center;
        margin: 0 20px;
        img {
          transform: scale(0.8, 0.8);
        }
      }
    }
    .show-side {
      position: absolute;
      left: 18%;
      top: 46%;
      width: 1%;
      height: 6%;
      background: #fff;
      z-index: 4;
      opacity: 0.6;
      display: flex;
      align-items: center;
      cursor: pointer;
      transition: 0.3s linear;
      &::before {
        content: "";
        position: absolute;
        left: -55%;
        top: -8%;
        width: 150%;
        height: 10px;
        background: #fff;
        transform: rotate(20deg);
      }
      &::after {
        content: "";
        position: absolute;
        left: -55%;
        bottom: -8%;
        width: 150%;
        height: 10px;
        background: #fff;
        transform: rotate(-20deg);
      }
    }
    .side {
      position: absolute;
      left: 0;
      top: 20%;
      width: 18%;
      height: 60%;
      background: #fff;
      z-index: 4;
      border-radius: 0px 10px 10px 0px;
      transition: 0.3s linear;
      .side-head {
        .head {
          box-sizing: border-box;
          padding: 15px 15px 10px 10px;
          position: relative;
          cursor: pointer;
          .icon {
            position: absolute;
            left: 10%;
            top: 35%;
          }
          .name {
            position: absolute;
            left: 18%;
            top: 35%;
          }
        }
        .sizes,
        .walls,
        .sounds {
          box-sizing: border-box;
          padding: 0 15px 10px 10px;
          cursor: pointer;
          position: relative;
          .name {
            position: absolute;
            left: 5%;
            top: 5%;
            font-size: 13px;
            font-weight: bold;
          }
        }
      }
      .side-brands {
        .head {
          position: relative;
          display: flex;
          justify-content: center;
          padding: 20px;
          span {
            font-size: 14px;
          }
          i {
            position: absolute;
            left: 5%;
            top: 38%;
            font-size: 14px;
            cursor: pointer;
          }
        }
        .con {
          display: flex;
          flex-flow: wrap;
          box-sizing: border-box;
          padding: 10px;
          .tent {
            width: 33.3%;
            box-sizing: border-box;
            padding: 5px;
            border-radius: 8px;
            cursor: pointer;
            span {
              font-size: 12px;
            }
            &:hover {
              background: #e6e6e6;
            }
          }
        }
      }
      .side-tvs {
        .head {
          position: relative;
          display: flex;
          justify-content: center;
          padding: 20px;
          span {
            font-size: 14px;
          }
          i {
            position: absolute;
            left: 5%;
            top: 38%;
            font-size: 14px;
            cursor: pointer;
          }
        }
        .con {
          padding: 10px;
          .tent {
            margin: 4px;
            box-sizing: border-box;
            border-radius: 8px;
            cursor: pointer;
            .group {
              display: grid;
              grid-template-columns: 1fr 1fr 1fr;
              .cons {
                margin: 0 5px;
                .tv-image {
                  box-sizing: border-box;
                  padding: 20px 10px;
                  border-radius: 4px;
                  &:hover {
                    background: #e6e6e6;
                  }
                }
                span {
                  font-size: 12px;
                }
              }
            }
            .trans {
              text-align: left;
              background: #f5f0f0;
              border-radius: 4px;
              box-sizing: border-box;
              padding: 10px;
              margin: 15px 5px;
              h5 {
                margin: 5px 0 10px 0;
              }
              p {
                font-size: 12px;
                line-height: 18px;
              }
            }
          }
        }
      }
      .side-walls {
        .head {
          position: relative;
          display: flex;
          justify-content: center;
          padding: 20px;
          span {
            font-size: 14px;
          }
          i {
            position: absolute;
            left: 5%;
            top: 38%;
            font-size: 14px;
            cursor: pointer;
          }
        }
        .con {
          display: flex;
          flex-flow: wrap;
          box-sizing: border-box;
          padding: 10px;
          .tent {
            width: 33.3%;
            box-sizing: border-box;
            padding: 5px;
            border-radius: 8px;
            cursor: pointer;
            span {
              font-size: 12px;
            }
          }
        }
      }
      .side-sounds {
        .head {
          position: relative;
          display: flex;
          justify-content: center;
          padding: 20px;
          span {
            font-size: 14px;
          }
          i {
            position: absolute;
            left: 5%;
            top: 38%;
            font-size: 14px;
            cursor: pointer;
          }
        }
        .con {
          padding: 10px;
          .tent {
            margin: 4px;
            box-sizing: border-box;
            border-radius: 8px;
            cursor: pointer;
            .group {
              display: grid;
              grid-template-columns: 1fr 1fr 1fr;
              .cons {
                margin: 0 5px;
                .tv-image {
                  box-sizing: border-box;
                  padding: 20px 10px;
                  border-radius: 4px;
                  &:hover {
                    background: #e6e6e6;
                  }
                }
                span {
                  font-size: 12px;
                }
              }
            }
            .trans {
              text-align: left;
              background: #f5f0f0;
              border-radius: 4px;
              box-sizing: border-box;
              padding: 10px;
              margin: 15px 5px;
              h5 {
                margin: 5px 0 10px 0;
              }
              p {
                font-size: 12px;
                line-height: 18px;
              }
            }
          }
        }
      }
    }
  }
  .moboile-side {
    width: 100%;
    background: #fff;
    z-index: 4;
    border-radius: 0px 10px 10px 0px;
    transition: 0.3s linear;
    .side-head {
      .head {
        box-sizing: border-box;
        padding: 15px 15px 10px 10px;
        position: relative;
        cursor: pointer;
        .icon {
          position: absolute;
          left: 10%;
          top: 35%;
          width: 5%;
        }
        .name {
          position: absolute;
          left: 18%;
          top: 37%;
          font-size: 40px;
        }
      }
      .sizes,
      .walls,
      .sounds {
        box-sizing: border-box;
        padding: 0 15px 10px 10px;
        cursor: pointer;
        position: relative;
        .el-image {
          width: 100%;
        }
        .name {
          position: absolute;
          left: 10%;
          top: 20%;
          font-size: 13px;
          font-weight: bold;
          font-size: 40px;
        }
      }
    }
    .side-brands {
      .head {
        position: relative;
        display: flex;
        justify-content: center;
        padding: 20px;
        line-height: 100px;
        span {
          font-size: 40px;
          font-weight: bold;
        }
        i {
          position: absolute;
          left: 5%;
          top: 38%;
          font-size: 40px;
          cursor: pointer;
        }
      }
      .con {
        display: flex;
        flex-flow: wrap;
        box-sizing: border-box;
        padding: 30px 50px;
        .tent {
          width: 33.3%;
          box-sizing: border-box;
          padding: 30px;
          border-radius: 20px;
          cursor: pointer;
          .el-image {
            width: 90%;
          }
          span {
            font-size: 40px;
          }
          &:hover {
            background: #e6e6e6;
          }
        }
      }
    }
    .side-tvs {
      .head {
        position: relative;
        display: flex;
        justify-content: center;
        padding: 20px;
        line-height: 100px;
        span {
          font-size: 40px;
          font-weight: bold;
        }
        i {
          position: absolute;
          left: 5%;
          top: 38%;
          font-size: 40px;
          cursor: pointer;
        }
      }
      .con {
        padding: 30px 40px;
        .tent {
          margin: 4px;
          box-sizing: border-box;
          border-radius: 8px;
          cursor: pointer;
          .group {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            .cons {
              margin: 20px 5px;
              .tv-image {
                box-sizing: border-box;
                padding: 50px;
                border-radius: 20px;
                width: 90%;
                &:hover {
                  background: #e6e6e6;
                }
              }
              span {
                font-size: 40px;
                display: block;
                margin-top: 20px;
              }
            }
          }
          .trans {
            text-align: left;
            background: #f5f0f0;
            border-radius: 20px;
            box-sizing: border-box;
            padding: 40px;
            margin: 15px 5px;
            h5 {
              font-size: 40px;
              margin: 20px 0 20px 0;
            }
            p {
              font-size: 12px;
              line-height: 60px;
              font-size: 40px;
            }
          }
        }
      }
    }
    .side-walls {
      .head {
        position: relative;
        display: flex;
        justify-content: center;
        padding: 20px;
        line-height: 100px;
        span {
          font-size: 40px;
          font-weight: bold;
        }
        i {
          position: absolute;
          left: 5%;
          top: 38%;
          font-size: 40px;
          cursor: pointer;
        }
      }
      .con {
        display: flex;
        flex-flow: wrap;
        box-sizing: border-box;
        padding: 30px 50px;
        .tent {
          width: 33.3%;
          box-sizing: border-box;
          padding: 30px;
          border-radius: 20px;
          cursor: pointer;
          .el-image {
            width: 90%;
          }
          span {
            font-size: 40px;
            display: block;
            margin-top: 20px;
          }
          &:hover {
            background: #e6e6e6;
          }
        }
      }
    }
    .side-sounds {
      .head {
        position: relative;
        display: flex;
        justify-content: center;
        padding: 20px;
        line-height: 100px;
        span {
          font-size: 40px;
          font-weight: bold;
        }
        i {
          position: absolute;
          left: 5%;
          top: 38%;
          font-size: 40px;
          cursor: pointer;
        }
      }
      .con {
        padding: 30px 40px;
        .tent {
          margin: 4px;
          box-sizing: border-box;
          border-radius: 8px;
          cursor: pointer;
          .group {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            .cons {
              margin: 20px 5px;
              .tv-image {
                box-sizing: border-box;
                padding: 50px;
                border-radius: 20px;
                width: 90%;
                &:hover {
                  background: #e6e6e6;
                }
              }
              span {
                font-size: 40px;
                display: block;
                margin-top: 20px;
              }
            }
          }
          .trans {
            text-align: left;
            background: #f5f0f0;
            border-radius: 20px;
            box-sizing: border-box;
            padding: 40px;
            margin: 15px 5px;
            h5 {
              font-size: 40px;
              margin: 20px 0 20px 0;
            }
            p {
              font-size: 12px;
              line-height: 60px;
              font-size: 40px;
            }
          }
        }
      }
    }
  }
}
.gray {
  background: #e6e6e6;
}
.grat {
  background: #f5f0f0;
}
.white {
  background: #ffffff;
}
.display-none {
  display: none;
}
.display-block {
  display: block;
}
</style>
<style>
.el-scrollbar__wrap {
  overflow-x: hidden;
}
</style>
