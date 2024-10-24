<script setup lang="ts">
import { computed } from 'vue'
import {
  convertEquatorialToHorizontal,
  getLunarEquatorialCoordinate,
  getSolarEquatorialCoordinate
} from '@observerly/astrometry'
import UIAltitudeChart from './components/UILineChart/UIAltitudeChart.vue'
import type { UIXYDatasetItem } from './components/UILineChart/types'

const LATITUDE = 0.0

const LONGITUDE = 0.0

const STEP_IN_MINUTES = 30

// Get the solar equatorial coordinates for the current day:
const midnight = new Date(new Date().setHours(0, 0, 0, 0))

// Get all of the solar equatorial coordinates every minute for the current day:
const solarAltitudePositionSerie = computed(() => {
  // We want to plot the solar altitude from midnight to midnight on the current day,
  // in steps of 20 minutes:
  return Array.from({ length: 1440 / STEP_IN_MINUTES }, (_, i) => {
    const now = new Date(midnight.getTime() + i * STEP_IN_MINUTES * 60000)

    // Get solar equatorial coordinates
    const equatorial = getSolarEquatorialCoordinate(now)

    // Convert equatorial coordinates to horizontal coordinates
    const horizontal = convertEquatorialToHorizontal(
      now,
      {
        latitude: LATITUDE,
        longitude: LONGITUDE
      },
      equatorial
    )

    return horizontal.alt
  })
})

// Get all of the lunar equatorial coordinates every minute for the current day:
const lunarAltitudePositionSerie = computed(() => {
  // We want to plot the lunar altitude from midnight to midnight on the current day,
  // in steps of 20 minutes:
  return Array.from({ length: 1440 / STEP_IN_MINUTES }, (_, i) => {
    const now = new Date(midnight.getTime() + i * STEP_IN_MINUTES * 60000)

    // Get lunar equatorial coordinates
    const equatorial = getLunarEquatorialCoordinate(now)

    // Convert equatorial coordinates to horizontal coordinates
    const horizontal = convertEquatorialToHorizontal(
      now,
      {
        latitude: LATITUDE,
        longitude: LONGITUDE
      },
      equatorial
    )

    return horizontal.alt
  })
})

const dataset = computed((): UIXYDatasetItem[] => {
  return [
    {
      name: 'Solar Altitude',
      series: solarAltitudePositionSerie.value,
      type: 'line',
      smooth: true,
      scaleMax: 90,
      scaleMin: -90,
      dataLabels: false,
      scaleSteps: 10,
      autoScaling: false
    },
    {
      name: 'Lunar Altitude',
      series: lunarAltitudePositionSerie.value,
      type: 'line',
      smooth: true,
      scaleMax: 90,
      scaleMin: -90,
      dataLabels: false,
      scaleSteps: 10,
      autoScaling: false
    }
  ]
})
</script>

<template>
  <div class="w-screen h-screen">
    <div class="w-full h-full bg-gray-900">
      <UIAltitudeChart :dataset="dataset" />
    </div>
  </div>
</template>
