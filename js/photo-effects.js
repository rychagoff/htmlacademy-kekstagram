const photoEffectRange = document.querySelector('.img-upload__effect-level');
const photoEffectRangeValue = photoEffectRange.querySelector('.effect-level__value');
const photoEffectRangeSlider = photoEffectRange.querySelector('.effect-level__slider');

const photoEffectsList = document.querySelector('.effects__list');

const slider = photoEffectRangeSlider;
// photoEffectRangeValue.value = 1;

noUiSlider.create(slider, {
  start: 1,
  range: {
    'min': 0,
    'max': 1
  },
  step: 0.1,
  connect: 'lower',
  format: {
    to: function(value) {
      if (Number.isInteger(value)) {
        value.toFixed(0);
      }
      value.toFixed(1);
    },
    from: function(value) {
      return parseFloat(value);
    }
  }
});

slider.noUiSlider.on('update', () => {
  photoEffectRangeValue.value = slider.noUiSlider.get();
});

photoEffectsList.addEventListener('change', (evt) => {
  const effect = evt.target.closest('.effects__radio');
  switch (effect.id) {
    case 'effect-none':
      console.log('ОРИГИНАЛ');
      break;
    default:
      console.log('НЕ ОРИГИНАЛ');
  }
});
