<template>
  <div class="candidates-skeleton">
    <div class="candidates-skeleton-animation" />
  </div>
</template>

<style lang="scss">
.candidates-skeleton {
  background: #FAFAFA;
  height: 136px;
  margin-top: 21px;
}

.candidates-skeleton-animation {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border-radius: 10px;

  &:before {
    content: '';
    position: absolute;
    top: -30%;
    left: -50%;
    transform: rotate(45deg);
    width: 0;
    height: 700px;
    opacity: 0;
    box-shadow: 2px 2px 1000px 50px #5f5f5f;
    animation: placeholder-shimmer-diagonal 1500ms infinite;

      @keyframes placeholder-shimmer-diagonal {
        0% {
          transform: translate3d(0, 0, 0) rotate(55deg);
          opacity: 0;
        }

        30% {
          opacity: 1;
        }

        90% {
          opacity: 0;
        }

        100% {
          transform: translate3d(900px, 0, 0) rotate(55deg);
        }
      }
  }
}
</style>
