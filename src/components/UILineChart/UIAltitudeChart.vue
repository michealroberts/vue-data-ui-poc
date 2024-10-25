<script setup lang="ts">
import { computed } from 'vue'
import type { UIXYConfig, UIXYDatasetItem } from './types'
import { VueUiXy as UIXYChart } from 'vue-data-ui'
import 'vue-data-ui/style.css'

defineProps<{
  dataset: UIXYDatasetItem[]
}>()

const config = computed((): UIXYConfig => {
  return {
    theme: '',
    responsive: true,
    customPalette: [],
    useCssAnimation: true,
    chart: {
      fontFamily: 'inherit',
      backgroundColor: 'transparent',
      color: '#1A1A1A',
      height: 600,
      width: 1000,
      zoom: {
        show: false,
        color: '#CCCCCC',
        highlightColor: '#4A4A4A',
        fontSize: 14,
        useResetSlot: false
      },
      padding: {
        top: 36,
        right: 24,
        bottom: 48,
        left: 48
      },
      highlighter: {
        color: '#1A1A1A',
        opacity: 5,
        useLine: false,
        lineDasharray: 2,
        lineWidth: 1
      },
      highlightArea: [
        {
          show: true,
          from: 2,
          to: 6,
          color: '#FF0000',
          opacity: 10,
          caption: {
            text: 'Caption 1',
            fontSize: 12,
            color: '#FFFFFF',
            bold: false,
            offsetY: 12, // In case of area overlap, could be programatically adapted to avoid labels overlapping
            width: 'auto',
            textAlign: 'center'
          }
        },
        {
          show: true,
          from: 20,
          to: 25,
          color: '#00FF00',
          opacity: 10,
          caption: {
            text: 'Caption 2',
            fontSize: 12,
            color: '#FFFFFF',
            bold: false,
            offsetY: 12,
            width: 'auto',
            textAlign: 'center'
          }
        }
      ],
      timeTag: {
        show: false,
        backgroundColor: '#e1e5e8',
        color: '#1A1A1A',
        fontSize: 12,
        circleMarker: {
          radius: 3,
          color: '#1A1A1A'
        }
      },
      grid: {
        stroke: '#64748b',
        showVerticalLines: false,
        showHorizontalLines: false,
        position: 'start',
        frame: {
          show: true,
          stroke: '#E1E5E8',
          strokeWidth: 4, // type error was corrected in v2.3.41 but perhaps still shows here for some reason,
          strokeLinecap: 'round'
        },
        labels: {
          show: true,
          color: '#64748b',
          fontSize: 12,
          axis: {
            yLabel: '',
            yLabelOffsetX: 0,
            xLabel: '',
            xLabelOffsetY: 14,
            fontSize: 12
          },
          zeroLine: {
            show: true
          },
          xAxis: {
            showBaseline: true
          },
          yAxis: {
            showBaseline: true,
            commonScaleSteps: 9,
            useIndividualScale: false,
            stacked: false,
            gap: 10,
            labelWidth: 40,
            scaleMin: -90,
            scaleMax: 90
          },
          xAxisLabels: {
            color: '#1A1A1A',
            show: true,
            values: [],
            fontSize: 18,
            showOnlyFirstAndLast: false,
            showOnlyAtModulo: false,
            modulo: 12,
            yOffset: 8,
            rotation: 0
          }
        }
      },
      comments: {
        show: false,
        showInTooltip: true,
        width: 200,
        offsetX: 0,
        offsetY: 0
      },
      labels: {
        fontSize: 10,
        prefix: '',
        suffix: ''
      },
      legend: {
        show: false
      },
      tooltip: {
        show: true,
        color: '#1A1A1A',
        backgroundColor: '#FFFFFF',
        fontSize: 14,
        borderRadius: 4,
        borderColor: '#e1e5e8',
        borderWidth: 1,
        backgroundOpacity: 100,
        position: 'center',
        offsetY: 24,
        showValue: true,
        showPercentage: false,
        roundingPercentage: 0
      },
      userOptions: {
        show: false
      }
    },
    bar: {
      borderRadius: 2,
      useGradient: true,
      periodGap: 0.1,
      border: {
        useSerieColor: false,
        strokeWidth: 1,
        stroke: '#FFFFFF'
      },
      labels: {
        show: true,
        offsetY: -8,
        rounding: 0,
        color: '#1A1A1A'
      },
      serieName: {
        show: false,
        useAbbreviation: true,
        abbreviationSize: 3,
        useSerieColor: true,
        color: '#1A1A1A',
        bold: false
      }
    },
    line: {
      radius: 2,
      useGradient: true,
      strokeWidth: 2,
      labels: {
        show: true,
        offsetY: -8,
        rounding: 0,
        color: '#1A1A1A'
      },
      area: {
        useGradient: true,
        opacity: 20
      }
    },
    plot: {
      radius: 6,
      useGradient: true,
      labels: {
        show: true,
        offsetY: -8,
        rounding: 0,
        color: '#1A1A1A'
      }
    },
    showTable: false
  }
})
</script>

<template>
  <div style="width: 1000px; height: 500px">
    <UIXYChart
      :config="config"
      :dataset="dataset"
    >
    </UIXYChart>
  </div>
</template>
