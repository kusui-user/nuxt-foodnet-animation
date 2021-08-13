<template>
  <div class="main">
    <div id="title">ABCD</div>
    <div class="tar"><p class="target">DDDDD</p> </div>
  </div>
</template>
<script>
// import { TweenMax, TimelineMax } from "gsap";
export default {
  middleware: 'midle',
  mounted() {
    const timeline = new TimelineMax()
    timeline
      .add([
        TweenMax.to('#title', 1, {
          css: {
            background: '#F3FFD8',
            transition: 'ease',
          }
        })
      ])
      .to('#title', 1.1, {
        css: {
          background: '#E9FFA5',
        }
      })
      .to('#title', 1.2, {
        css: {
          background: '#DBFF71',
        }
      })
      .to('#title', 1.3, {
        css: {
         background: '#D0FF43',
        }
      })
      .to('#title', 1.4, {
        css: {
         background: '#D7EEFF',
        }
      })
      .to('#title', 1.5, {
        css: {
         background: '#A7F1FF',
        }
      })
      .to('#title', 1.6, {
        css: {
         background: '#60EEFF',
        }
      })
      .to('#title', 1.7, {
        css: {
         background: '#00ECFF',
        }
      })

  }
};
</script>

<style scoped lang="scss">
body {
  background: #fff;
  padding: 20px;
  font-family: Helvetica;
}

#title {
  // width: 500px;
  height: 300px;
  width: 100%;
  background-color: red;
  text-align: center;
  line-height: 300px;
}

.tar{
  height: 300px;
  width: 100%;
  background-color: var(--color-bg-black-88);
  .target{
    color: red;
    @include ssat();
  }
}

.main{
  @include mq-target(sm){
    display: flex;
  }
}
</style>
