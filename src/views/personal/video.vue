<<template>
  <div>
    <div v-if="isEmptyObj(this.videoData)">
      <Empty />
    </div>
    <div v-else>
      <div v-for="(item,index) in videoData" :key="index">
        <div>
          视频名：<h2>{{ item.video_title }}</h2>
        </div>
        <div>
          简介：<h2>{{ item.comments }}</h2>
        </div>
        <div>
          <videoPlayer class="video-player vjs-custom-skin" :options="playerOptions(item.cover_img, item.video)"></videoPlayer>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { videoPlayer } from 'vue-video-player'
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'
import { getAuthorVideos } from '@/services/xhr/demo'
import { Empty } from 'ant-design-vue'
export default {
  components: { videoPlayer, Empty },
  async created() {
    this.requestData = getAuthorVideos({ id: this.$route.params.userId })
    this.requestData.then((re) => {
      this.videoData = re
    })
  },
  methods: {
    isEmptyObj(obj) {
      return Object.keys(obj).length === 0
    },
    playerOptions(posterUrl, videoUrl) {
      const options = {
        height: 400,
        width: 600,
        playbackRates: [0.7, 1.0, 1.5, 2.0], // 播放速度
        autoplay: false, // 如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: 'video/mp4', // 这里的种类支持很多种：基本视频格式、直播、流媒体等，具体可以参看git网址项目
            src: require('@/assets/video/dingding.mp4'), // url地址
            // src: videoUrl, // url地址
          },
        ],
        poster: posterUrl,
        notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true, // 全屏按钮
        },
      }
      return options
    },
  },
  data() {
    return {
      requestData: [],
      videoData: [],
      // 视频播放器配置
    }
  },
}
</script>

<style scoped>
</style>
