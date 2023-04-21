<template>
  <div class="water-drop">
    <div class="container">
      <div class="drop">
        <div class="content">
          <h2>{{ title | formatTitle}}</h2>
          <form>
            <div class="inputBox">
              <input type="text"
                     placeholder="UserName" />
            </div>
            <div class="inputBox">
              <input type="password"
                     placeholder="Password" />
            </div>
            <div class="inputBox">
              <input type="submit"
                     placeholder="Login" />
            </div>
          </form>
        </div>
      </div>
      <drop-shape :style="passStyle">忘记密码?</drop-shape>
      <drop-shape :style="signStyle">注册</drop-shape>
    </div>
  </div>
</template>

<script>
import DropShape from '@/components/module/DropShape'
export default {
  name: 'index',
  components: {
    DropShape
  },
  data () {
    return {
      title: '登陆（登录）',
      passStyle: {
        'width': '120px',
        'height': '120px',
        'right': '-120px',
        'bottom': '0',
        'background': '#c61dff',
        'box-shadow': 'inset 10px 10px 10px rgba(190, 1, 254, 0.05), 25px 35px 20px rgba(190, 1, 254, 0.1), 25px 30px 30px rgba(190, 1, 254, 0.1), inset -20px -20px 25px rgba(255, 255, 255, 0.5)',
        'border-radius': '32% 68% 56% 44% / 40% 36% 64% 60%'
      },
      signStyle: {
        'width': '80px',
        'height': '80px',
        'right': '-140px',
        'bottom': '150px',
        'background': '#01b4ff',
        'box-shadow': 'inset 10px 10px 10px rgba(1, 180, 255, 0.05), 15px 25px 10px rgba(1, 180, 255, 0.1), 15px 20px 20px rgba(1, 180, 255, 0.1), inset -10px -10px 15px rgba(255, 255, 255, 0.5)',
        'border-radius': '51% 49% 33% 67% / 55% 34% 66% 45%'
      }
    }
  },
  filters: {
    formatTitle (value) {
      return 'の' + value
    }
  }
}
</script>

<style lang='scss' scoped>
.water-drop {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ZGZY;
  background: #eff0f4;
  min-height: 100vh;
  .container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    .drop {
      position: relative;
      left: -80px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 350px;
      height: 350px;
      box-shadow: inset 20px 20px 20px rgba(0, 0, 0, 0.05),
        25px 35px 20px rgba(0, 0, 0, 0.05), 25px 30px 30px rgba(0, 0, 0, 0.05),
        inset -20px -20px 25px rgba(255, 255, 255, 0.9);
      border-radius: 50% 50% 33% 67% / 39% 50% 50% 61%;
      transition: 0.5s;
      &:hover {
        border-radius: 50%;
      }
      &::before {
        content: "";
        position: absolute;
        top: 50px;
        left: 85px;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        background: #fff;
        opacity: 0.9;
      }
      &::after {
        content: "";
        position: absolute;
        top: 90px;
        left: 110px;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background: #fff;
        opacity: 0.9;
      }
      .content {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
        padding: 40px;
        gap: 15px;
        h2 {
          position: relative;
          color: #333;
          font-size: 1.5em;
        }
        form {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 20px;
          .inputBox {
            position: relative;
            width: 225px;
            box-shadow: inset 2px 5px 10px rgba(0, 0, 0, 0.1),
              inset -2px -5px 10px rgba(255, 255, 255, 1),
              15px 15px 10px rgba(0, 0, 0, 0.05),
              15px 10px 15px rgba(0, 0, 0, 0.25);
            border-radius: 25px;
            &::before {
              content: "";
              position: absolute;
              top: 6px;
              left: 50%;
              transform: translateX(-50%);
              width: 65%;
              height: 5px;
              background: rgba(255, 255, 255, 0.5);
              border-radius: 5px;
            }
            &:last-child {
              width: 120px;
              background: #ff0f5b;
              transition: 0.5s;
              box-shadow: inset 2px 5px 10px rgba(0, 0, 0, 0.1),
                15px 15px 10px rgba(0, 0, 0, 0.05),
                15px 10px 15px rgba(0, 0, 0, 0.025);
              &:hover {
                width: 150px;
              }
            }
            input {
              border: none;
              outline: none;
              background: transparent;
              width: 100%;
              font-size: 1em;
              padding: 10px 15px;
              &[type="submit"] {
                color: #fff;
                text-transform: uppercase;
                font-size: 1em;
                cursor: pointer;
                letter-spacing: 0.1em;
                font-weight: bold;
              }
            }
          }
        }
      }
    }
  }
}
</style>
