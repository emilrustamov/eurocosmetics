<template>
  <div>
    <div v-if="loading" class="loader-overlay">
      <div class="loader">

        <div class="logo-wrapper">
          <!-- <img class="loader-logo" :src="'/img/logo-fon.jpg'" alt="Логотип" /> -->
          <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="614.4" height="345.6"
            style="shape-rendering:geometricPrecision;text-rendering:geometricPrecision;image-rendering:optimizeQuality;fill-rule:evenodd;clip-rule:evenodd"
            viewBox="0 0 16255.98 9143.98">
            <defs>
              <style>
                .fil2 {
                  fill: #d7b56d;
                  fill-rule: nonzero
                }
              </style>
            </defs>
            <g id="Слой_x0020_1">
              <path d="M0 0h16255.98v9143.98H0z" style="fill:none" />
              <g id="_2570604695760">
                <path d="M6646.83 2691.72h2962.33v3760.53H6646.83z" style="fill:#fefefe" />
                <path
                  d="M7208.67 3090.51v494.25h305.01c23.62 0 56.75-1.64 98.39-4.58 41.98-2.96 67.56-4.6 76.42-4.92-.32 2.62-.98 7.86-1.97 14.78-1.31 7.19-1.96 13.76-2.62 20.33-.65 6.57-.99 11.81-.99 15.76 0 3.26.34 8.53.99 16.07.98 7.23 1.97 14.13 2.62 21.01.99 6.9 1.65 12.79 1.97 18.38-18.7-.66-46.57-2.63-83.63-5.59-37.05-2.95-67.56-4.59-91.18-4.59h-305.01v575c80.37 0 199.08-2.62 355.85-7.54 60.67-1.99 121.01-7.9 181.37-18.07-.34 4.93-.99 11.17-1.97 18.73-.99 7.54-1.98 14.75-2.63 22.3-.98 7.54-1.31 13.79-1.31 18.06 0 8.87.67 18.71 2.3 28.89 1.31 10.17 2.62 20.33 3.61 30.19h-710.38V2997.95h698.9c-.67 7.89-1.98 17.75-3.61 29.22-1.96 11.51-2.62 21.34-2.62 30.19 0 8.21.66 18.38 2.62 30.54 1.63 11.83 2.94 21.34 3.61 28.22-47.55-9.53-106.6-16.74-177.44-21.65l-197.09-3.96h-151.21z"
                  class="logo-letter letter-1" />
                <path
                  d="M7896.91 2997.95v753.87c0 89.59 7.21 166.39 21.32 231.04 14.43 64.67 38.03 118.83 71.16 162.78 33.13 43.99 77.73 76.8 133.82 99.13 56.07 22 125.6 33.15 208.9 33.15 100.69 0 182.35-22.66 245.65-67.92 62.97-45.63 108.55-108.66 136.77-190.05 28.19-81.38 42.3-177.21 42.3-287.81v-734.19c8.85 1.01 18.04 2.34 27.88 3.64 9.51 1.64 18.68 2.3 27.22 2.3 4.26 0 9.84-.34 16.73-1.32 7.2-.65 14.09-1.64 20.98-2.63 7.22-.98 12.8-1.64 17.39-1.99v783.74c0 127.35-23.62 234.98-70.52 322.93-47.22 87.63-113.8 153.6-200.06 197.9-85.92 43.99-187.27 65.98-304.02 65.98-95.44 0-177.42-11.15-245.98-33.8-68.87-22.32-129.21-56.78-181.03-103.73-38.69-35.43-68.2-76.77-88.87-124.38-20.34-47.57-34.11-97.79-41.32-150.3-6.9-52.51-10.84-109.29-11.49-170.66v-787.68c5.58.35 14.11 1.01 25.58 2.34 11.48.96 22.97 1.95 34.12 2.59 11.15.67 20.01 1.01 26.88 1.01 5.91 0 14.44-.34 25.58-1.32 11.49-.65 22.63-1.64 33.78-2.63 11.16-.98 20.35-1.64 27.23-1.99zM7204.44 4448.24v541.84c2.3 0 14.09.32 35.43.98 21.63.33 40.65.64 57.38.64 65.26 0 118.73-3.92 160.71-11.81 75.43-15.73 136.1-47.91 182.67-96.8 46.24-48.91 69.53-110.62 69.53-185.11 0-142.11-72.15-224.8-216.45-247.77-21-3.96-61.67-5.91-122.01-5.91-18.36.66-46.56 1.29-85.27 1.95-38.7.66-65.92 1.31-81.99 1.99zm-173.16 1274.01V4375.37h417.17c100.02 0 182.33 10.83 246.96 32.83 64.6 21.97 112.48 55.46 143.64 99.76 30.83 44.65 46.25 100.1 46.25 166.39 0 106.01-38.71 189.7-116.43 251.41-77.41 61.67-173.18 102.72-286.97 122.72l405.36 514.61 94.46 110.28 37.71 48.88c-14.76-.66-34.43-1.96-59.36-3.6-24.6-1.64-42.96-2.3-55.1-2.3-12.79 0-31.82.66-56.73 2.3-24.93 1.64-43.31 2.94-55.44 3.6-47.55-67.26-88.88-124.38-123.97-171.32l-232.52-301.27-157.09-185.08h-74.78v657.67c-11.16-.66-26.24-1.96-45.26-3.6-19.01-1.64-32.8-2.3-41.32-2.3-10.16 0-25.25.66-44.6 2.3-19.69 1.64-33.78 2.94-41.98 3.6z"
                  class="logo-letter letter-2" />
                <path
                  d="M9031.87 5043.23c0-91.55-8.86-170.97-26.56-239.24-17.39-67.93-50.18-132.6-97.74-193.94-48.54-61.39-108.88-108.97-181.03-141.79-72.49-33.16-148.25-49.55-227.61-49.55-113.81 0-212.53 27.23-296.47 81.72-83.98 54.48-147.93 131.6-192.19 231.68-44.28 100.1-66.58 216.28-66.58 348.56 0 128.31 23.94 238.24 71.5 330.14 47.87 92.24 112.48 161.46 194.47 208.08 82 46.6 172.51 69.91 271.23 69.91 94.12 0 176.44-20.36 246.96-61.39 70.52-40.69 127.9-93.85 172.84-159.48 44.6-65.64 77.39-135.88 99.04-211.04 21.32-75.16 32.14-146.37 32.14-213.66zm-557.21 710.54c-106.92 0-204.98-16.4-294.51-49.23-89.54-32.79-166.29-80.07-230.56-141.76-63.95-61.69-113.15-135.54-147.26-221.88-34.43-85.96-51.48-180.82-51.48-284.22 0-105.66 18.36-201.82 55.42-289.11 37.05-87.63 88.88-161.81 155.13-223.51 66.57-61.36 143.96-108.63 232.52-141.45 88.23-32.47 183.34-48.88 285.33-48.88 95.76 0 187.92 13.45 276.47 40.01 88.88 26.59 168.57 67.29 239.09 122.43 70.52 55.13 126.59 125.69 167.92 211.68 41.32 85.65 61.98 185.75 61.98 299.3 0 108.31-18.04 207.09-54.44 296.69-36.4 89.62-88.55 166.39-156.11 231.06-67.88 64.65-147.59 113.89-239.41 148.01-92.16 33.8-191.86 50.86-300.09 50.86z"
                  class="logo-letter letter-3" />
                <path
                  d="M6774.46 2819.35h2707.08v3505.27H6774.46V2819.35zm340.7 3209.8-9.99 28.23h-3.49c-5.69-7.62-9.61-12.33-11.78-14.1-4.76-5.42-11.13-9.66-19.16-12.65-7.95-2.98-15.86-4.47-23.74-4.47-15.91 0-29.51 4.04-40.8 12.18-11.3 8.04-19.74 18.84-25.4 32.16-5.64 13.4-8.45 27.87-8.45 43.36 0 17.96 3.33 34.06 9.9 48.4 6.59 14.33 15.92 25.46 27.86 33.38 12.01 7.91 25.76 11.9 41.24 11.9 8.02 0 15.34-1.14 21.99-3.43 6.72-2.19 12.87-5.28 18.6-9.12 5.63-3.78 12.07-8.92 19.31-15.25l2.6 1.28-2.17 19.63c-19.74 14.31-41.82 21.45-66.34 21.45-23.38 0-43.4-4.57-60.27-13.77-16.84-9.19-29.59-21.82-38.13-37.87-8.53-16.1-12.79-34.21-12.79-54.46 0-21.46 4.77-40.14 14.38-55.9 9.63-15.84 22.94-27.88 40.01-36.09 17.07-8.26 36.39-12.42 58.04-12.42 26.33 0 49.11 5.86 68.58 17.56zm33.42 85.58c0-20.11 4.78-38.03 14.39-53.72 9.62-15.69 22.88-27.8 39.72-36.42 16.93-8.62 35.68-13 56.23-13 19.66 0 37.19 4.28 52.45 12.83 15.19 8.57 27.05 20.78 35.51 36.52 8.48 15.76 12.66 34.16 12.66 55.06 0 13.67-2.31 26.95-6.93 39.63-4.64 12.76-11.58 24.18-20.84 34.23-9.33 10.04-20.76 17.95-34.29 23.68-13.61 5.7-29.09 8.56-46.46 8.56-13.96 0-27.19-2.43-39.79-7.34-12.51-4.86-23.44-11.91-32.77-21.19-9.32-9.27-16.64-20.61-21.93-33.94-5.27-13.42-7.95-28.38-7.95-44.9zm109.83-89.86c-17.22 0-31.19 4.64-41.97 13.88-10.71 9.29-18.37 21.14-22.87 35.59-4.55 14.54-6.79 30.1-6.79 46.69 0 24.06 5.58 44.72 16.73 61.9 11.21 17.26 28.2 25.9 50.99 25.9 15.63 0 28.43-5.28 38.49-15.78 9.97-10.46 17.22-23.03 21.7-37.76 4.42-14.72 6.65-28.52 6.65-41.43 0-14.56-2.01-28.52-6.14-42-4.14-13.47-10.86-24.68-20.26-33.6-9.4-8.9-21.57-13.39-36.53-13.39zm143.61 152.29h3.48c5.5 8.91 12.81 16.41 21.83 22.55 9.06 6.05 18.38 9.12 28.07 9.12 7.09 0 13.91-1.7 20.48-4.99 6.59-3.36 11.94-8.04 16-14.07 4.05-6.03 6.08-12.67 6.08-19.96 0-12.73-3.99-21.59-12.01-26.3-7.96-4.76-20.63-9.63-38-14.48-17.35-4.92-30.45-10.97-39.27-18.17-8.76-7.29-13.17-19.28-13.17-35.94 0-19.83 6.65-35.28 20.04-46.5 13.38-11.19 30.23-16.83 50.64-16.83 10.41 0 20.05 1.15 28.94 3.43 8.89 2.36 15.62 4.85 20.18 7.62-4.41 9.99-7.82 20.11-10.4 30.47h-3.92c-2.81-7.34-7.74-13.92-14.84-19.63-7.15-5.79-14.46-8.61-22.06-8.61-11.35 0-20.77 3.13-28.28 9.33-7.47 6.27-11.23 14.99-11.23 26.17 0 12.06 4.06 20.62 12.1 25.68 8.01 5.07 20.69 10.34 37.97 15.84 17.3 5.48 30.31 11.74 39.14 18.87 8.82 7.14 13.26 18.33 13.26 33.72 0 14.56-3.85 26.95-11.59 37.08-7.73 10.2-17.72 17.82-29.94 22.9-12.24 5.06-25.04 7.64-38.42 7.64-20.78 0-38.87-4.57-54.27-13.71 5.21-15.09 8.25-25.51 9.19-31.23zm172.26 41.52v-204.5c1.74.12 4.33.35 7.89.69 3.62.35 6.8.57 9.54.57 2.4 0 5.29-.22 8.62-.57 3.32-.34 6.21-.57 8.68-.69v36.8c15.49-26.26 36.9-39.39 64.31-39.39 14.48 0 27.58 3.72 39.22 11.21 11.72 7.48 19.75 17.87 24.1 31.07 16.98-28.16 39.71-42.28 68.15-42.28 25.45 0 43.48 6.94 54.04 20.83 10.55 13.82 15.83 34.73 15.83 62.68v123.58c-2.23-.16-5.28-.45-8.96-.79-3.68-.36-6.53-.52-8.47-.52-2.03 0-4.99.16-8.9.52-3.9.34-6.65.63-8.38.79v-113.8c0-22.85-3.19-40.4-9.62-52.65-6.46-12.24-19.33-18.37-38.57-18.37-19.68 0-32.85 6.54-39.73 19.67-6.8 13.12-10.19 29.67-10.19 49.57v115.58c-2.55-.16-5.65-.45-9.26-.79-3.61-.36-6.37-.52-8.11-.52-1.95 0-4.92.16-8.9.52-3.97.34-6.8.63-8.46.79v-125.36c0-20.32-3.69-35.3-11.06-44.93-7.4-9.7-19.03-14.53-34.95-14.53-20.41 0-34.15 5.41-41.31 16.25-7.16 10.83-10.78 25.51-10.78 43.98v124.59c-2.47-.16-5.59-.45-9.2-.79-3.61-.36-6.35-.52-8.1-.52-2.17 0-5.12.16-9.04.52-3.91.34-6.65.63-8.39.79zm523.14-44.14-.58 22.23c-23.72 16.9-48.54 25.33-74.58 25.33-19.9 0-37.63-4.21-53.18-12.62-15.56-8.36-27.64-20.47-36.32-36.38-8.61-15.91-12.96-34.66-12.96-56.34 0-19.97 3.85-37.9 11.59-53.88 7.67-16.07 19.03-28.53 33.99-37.65 14.98-9.06 32.93-13.64 53.84-13.64 15.91 0 30.6 3.58 44.04 10.62 13.54 7.07 24.32 17.78 32.44 32.11 8.01 14.32 12.07 31.94 12.07 52.69 0 .93-.07 2.5-.22 4.54-.14 2.08-.22 3.73-.22 4.86-29.51-.86-58.88-1.28-88.19-1.28h-61.13c-.29 2-.44 4.98-.44 8.98 0 14.98 2.91 28.53 8.76 40.66 5.78 12.11 14.47 21.66 25.82 28.73 11.44 7.06 25.05 10.61 40.88 10.61 22.15 0 43.57-9.81 64.39-29.57zm-139.41-75.24h115.47c-1.15-49.62-19.23-74.43-54.34-74.43-12.73 0-23.66 3.55-32.54 10.62-8.99 7.14-15.71 16.32-20.33 27.66-4.56 11.26-7.31 23.32-8.26 36.15zm195.35-127.47 34.71-13.27v55.62h46.03c-.59 3.99-.87 6.82-.87 8.55 0 2.34.28 4.92.87 7.7h-46.03v122.85c0 16.1 2.11 29.16 6.23 39 4.13 9.94 12.74 14.85 25.9 14.85 2.61 0 9.12-1 19.53-3.02v10.28c-14.17 5.13-26.33 7.71-36.46 7.71-11.21 0-20.32-1.93-27.55-5.77-7.24-3.87-12.74-10.73-16.58-20.48-3.83-9.84-5.78-23.44-5.78-40.94v-124.48h-26.92c.58-2.01.88-4.72.88-8.14 0-3.72-.3-6.42-.88-8.11h26.92v-42.35zm167.12 42.35v204.5c-2.25-.16-5.28-.45-8.98-.79-3.69-.36-6.51-.52-8.45-.52-2.03 0-5 .16-8.91.52-3.9.34-6.65.63-8.41.79v-204.5c1.76.12 4.35.35 7.91.69 3.63.35 6.71.57 9.41.57 2.59 0 5.49-.22 8.89-.57 3.32-.34 6.21-.57 8.54-.69zm4.77-73.18c0 6.07-2.24 11.2-6.73 15.49-4.42 4.2-9.62 6.34-15.47 6.34-5.94 0-11.16-2.14-15.56-6.43-4.42-4.26-6.6-9.4-6.6-15.4 0-5.96 2.18-11.12 6.52-15.4 4.35-4.28 9.55-6.42 15.64-6.42 5.99 0 11.19 2.14 15.61 6.36 4.43 4.29 6.59 9.4 6.59 15.46zm237.01 88.15-9.99 28.23h-3.48c-5.7-7.62-9.61-12.33-11.78-14.1-4.76-5.42-11.14-9.66-19.17-12.65-7.95-2.98-15.85-4.47-23.73-4.47-15.92 0-29.51 4.04-40.8 12.18-11.29 8.04-19.74 18.84-25.4 32.16-5.63 13.4-8.47 27.87-8.47 43.36 0 17.96 3.34 34.06 9.91 48.4 6.6 14.33 15.92 25.46 27.86 33.38 12.02 7.91 25.76 11.9 41.24 11.9 8.04 0 15.34-1.14 21.99-3.43 6.73-2.19 12.88-5.28 18.6-9.12 5.64-3.78 12.08-8.92 19.32-15.25l2.6 1.28-2.17 19.63c-19.75 14.31-41.82 21.45-66.34 21.45-23.38 0-43.41-4.57-60.27-13.77-16.85-9.19-29.59-21.82-38.13-37.87-8.53-16.1-12.79-34.21-12.79-54.46 0-21.46 4.77-40.14 14.37-55.9 9.63-15.84 22.95-27.88 40.02-36.09 17.08-8.26 36.39-12.42 58.03-12.42 26.33 0 49.12 5.86 68.58 17.56zm45.57 148.01h3.48c5.52 8.91 12.82 16.41 21.86 22.55 9.04 6.05 18.37 9.12 28.08 9.12 7.07 0 13.88-1.7 20.45-4.99 6.59-3.36 11.94-8.04 15.99-14.07 4.06-6.03 6.09-12.67 6.09-19.96 0-12.73-3.98-21.59-12.01-26.3-7.96-4.76-20.64-9.63-38-14.48-17.36-4.92-30.45-10.97-39.27-18.17-8.75-7.29-13.17-19.28-13.17-35.94 0-19.83 6.67-35.28 20.05-46.5 13.38-11.19 30.23-16.83 50.63-16.83 10.43 0 20.05 1.15 28.94 3.43 8.9 2.36 15.62 4.85 20.19 7.62-4.42 9.99-7.82 20.11-10.41 30.47h-3.91c-2.82-7.34-7.76-13.92-14.85-19.63-7.14-5.79-14.46-8.61-22.05-8.61-11.36 0-20.76 3.13-28.28 9.33-7.46 6.27-11.23 14.99-11.23 26.17 0 12.06 4.05 20.62 12.09 25.68 8.03 5.07 20.69 10.34 37.99 15.84 17.29 5.48 30.3 11.74 39.12 18.87 8.84 7.14 13.25 18.33 13.25 33.72 0 14.56-3.83 26.95-11.59 37.08-7.72 10.2-17.71 17.82-29.93 22.9-12.23 5.06-25.04 7.64-38.42 7.64-20.77 0-38.87-4.57-54.26-13.71 5.21-15.09 8.24-25.51 9.17-31.23zm175.74 19.27c0-7 2.61-12.97 7.89-18.06 5.28-5.03 11.44-7.54 18.53-7.54 7.09 0 13.09 2.51 18.15 7.62 5 5.08 7.53 11.06 7.53 17.98 0 6.99-2.53 13.05-7.59 18.1-5.08 5.08-11.08 7.57-18.09 7.57-7.18 0-13.31-2.58-18.53-7.64-5.28-5.08-7.89-11.11-7.89-18.03zm117.64-224.6 34.73-13.27v55.62h46.01c-.58 3.99-.87 6.82-.87 8.55 0 2.34.29 4.92.87 7.7h-46.01v122.85c0 16.1 2.11 29.16 6.22 39 4.13 9.94 12.73 14.85 25.91 14.85 2.6 0 9.12-1 19.52-3.02v10.28c-14.17 5.13-26.33 7.71-36.46 7.71-11.21 0-20.33-1.93-27.57-5.77-7.22-3.87-12.72-10.73-16.56-20.48-3.84-9.84-5.79-23.44-5.79-40.94v-124.48h-26.92c.57-2.01.88-4.72.88-8.14 0-3.72-.31-6.42-.88-8.11h26.92v-42.35zm120.24 246.85v-204.5c1.74.12 4.35.35 7.9.69 3.6.35 6.79.57 9.54.57 2.39 0 5.28-.22 8.6-.57 3.34-.34 6.24-.57 8.69-.69v36.8c15.49-26.26 36.9-39.39 64.33-39.39 14.45 0 27.54 3.72 39.19 11.21 11.73 7.48 19.77 17.87 24.11 31.07 17-28.16 39.7-42.28 68.15-42.28 25.47 0 43.47 6.94 54.04 20.83 10.57 13.82 15.85 34.73 15.85 62.68v123.58c-2.25-.16-5.28-.45-8.98-.79-3.69-.36-6.51-.52-8.46-.52-2.03 0-5.01.16-8.89.52-3.92.34-6.66.63-8.4.79v-113.8c0-22.85-3.19-40.4-9.63-52.65-6.44-12.24-19.31-18.37-38.55-18.37-19.68 0-32.86 6.54-39.72 19.67-6.8 13.12-10.2 29.67-10.2 49.57v115.58c-2.54-.16-5.65-.45-9.27-.79-3.62-.36-6.36-.52-8.11-.52-1.94 0-4.9.16-8.87.52-4 .34-6.83.63-8.49.79v-125.36c0-20.32-3.68-35.3-11.07-44.93-7.37-9.7-19.02-14.53-34.95-14.53-20.37 0-34.14 5.41-41.3 16.25-7.14 10.83-10.78 25.51-10.78 43.98v124.59c-2.45-.16-5.57-.45-9.19-.79-3.61-.36-6.37-.52-8.1-.52-2.17 0-5.13.16-9.04.52-3.91.34-6.66.63-8.4.79zM6855.82 2910.39h2544.36v2935.87H6855.82V2910.39z"
                  class="logo-path" />
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
    <div v-else>
      <section id="home" class="relative w-full md:h-screen h-auto max-h-[1200px] overflow-hidden animate-block">
        <img :data-src="'/img/mainbanner.jpg'" alt="Banner"
          class="w-full h-full object-cover object-[center_35%] animate-image lazyload">
        <div class="absolute inset-0 bg-[linear-gradient(57.99deg,_#FCE7F3_0%,_#E8C4E6_47.5%)] opacity-70"></div>
        <div class="absolute inset-0 flex flex-col items-center justify-center">
          <span class="text-white text-[14px] font-normal uppercase py-10 animate-text">
            Eurocosmetics.tm
          </span>
          <h1
            class="text-white text-center text-[40px] sm:text-[80px] font-light uppercase  tracking-[2px] animate-text leading-normal sm:leading-[105.6px]">
            {{ $t("home.createBeauty") }} <br> {{ $t("home.together") }}
          </h1>
        </div>
      </section>

      <section id="about" class="relative">
        <div class="container mx-auto md:px-5 !p-[20px]">
          <div
            class="relative mx-auto max-w-[400px] text-center transform md:-translate-y-1/2  z-30 p-[10px] bg-[#fff] rounded md:shadow  animate-block">
            <video autoplay muted loop class="w-full max-h-[660px] object-contain">
              <source :src="'/img/video.mp4'" type="video/mp4">
              Your browser does not support HTML5 video.
            </video>
          </div>
        </div>
      </section>

      <section class="md:pb-50 pb-30 bg-[#15112a]">
        <div class="container mx-auto px-5">
          <div class="flex flex-col md:flex-row justify-around items-center gap-5">

            <!-- 1) Официальные дистрибьюторы лучших европейских брендов -->
            <div class="text-center flex-1 animate-block">
              <div class="mx-auto mb-2 w-28 h-28 flex items-center justify-center animate-image">
                <i class="fas fa-shipping-fast text-[var(--gold)] text-[4rem]"></i>
              </div>
              <p class="text-[var(--gold)] text-[20px] animate-text">
                {{ $t("home.officialDistributors") }}<br>
                {{ $t("home.bestEuropeanBrands") }}
              </p>
            </div>

            <!-- 2) Широкий ассортимент космоцевтических продуктов -->
            <div class="text-center flex-1 animate-block">
              <div class="mx-auto mb-2 w-28 h-28 flex items-center justify-center animate-image">
                <i class="fas fa-boxes text-[var(--gold)] text-[4rem]"></i>
              </div>
              <p class="text-[var(--gold)] text-[20px] animate-text">
                {{ $t("home.wideRange") }}<br>
                {{ $t("home.cosmeceuticalProducts") }}
              </p>
            </div>

            <!-- 3) Репутация и надёжность -->
            <div class="text-center flex-1 animate-block">
              <div class="mx-auto mb-2 w-28 h-28 flex items-center justify-center animate-image">
                <i class="fas fa-award text-[var(--gold)] text-[4rem]"></i>
              </div>
              <p class="text-[var(--gold)] text-[20px] animate-text">
                {{ $t("home.reputation") }}<br>
                {{ $t("home.reliability") }}
              </p>
            </div>

          </div>
        </div>
      </section>


      <!-- Секция с изображениями и текстом "О нас" -->
      <section class="pb-20 md:pt-30 pt-20 md:pb-50">
        <div class="container mx-auto px-5 space-y-10 circle relative">

          <!-- Блок «About Us» с цифрами -->
          <div class="flex flex-col md:flex-row items-center justify-evenly gap-5 image-container">
            <!-- Счётчики вместо картинки -->
            <div class="lg:w-1/2 w-full flex flex-col items-center lg:space-y-50 space-y-10">
              <div class="flex flex-col items-center text-[var(--gold)]">
                <div class="text-4xl md:lg:text-[80px] font-bold animate-number" data-target="1000">0+</div>
                <div class="text-lg">{{ $t("about.products") }}</div>
              </div>
              <div class="flex flex-col items-center text-[var(--gold)] relative">
                <div class="text-4xl md:lg:text-[80px] font-bold animate-number" data-target="20000">0+</div>
                <div class="text-lg">{{ $t("about.clients") }}</div>
              </div>
              <div class="flex flex-col items-center text-[var(--gold)]">
                <div class="text-4xl md:lg:text-[80px] font-bold animate-number" data-target="5">0</div>
                <div class="text-lg">{{ $t("about.stores") }}</div>
              </div>
            </div>
            <!-- Текстовая часть About Us -->
            <div class="text-center text-[20px] text-[var(--gold)]  lg:w-1/2 w-full">
              <div class="mb-2 mx-auto w-28 h-28 flex items-center justify-center ">
                <img :data-src="'/img/logo.png'" alt="Logo" class="w-28 h-28 object-contain lazyload">
              </div>
              <h2 class="mb-2 lg:text-[40px] text-3xl tracking-[5px] uppercase py-5">
                {{ $t("about.title") }}
              </h2>
              <p class="mx-auto md:text-justify text-left pb-5 whitespace-pre-line w-full lg:w-3/4">

                {{ $t("home.aboutUsDescription") }}
              </p>
              <!-- <animated-button :link="'/about'" :label="$t('home.moreInfo')"></animated-button> -->
            </div>
          </div>

          <!-- Блок «Cooperation» с картинкой -->
          <div class="flex flex-col md:flex-row-reverse items-center justify-evenly gap-5 image-container">
            <!-- Картинка Cooperation -->
            <div class="relative lg:w-1/2 w-full">
              <div class="rounded background-overlay lg:max-w-[740px] lg:max-h-[800px] w-auto h-auto
                 md:max-w-[400px] md:max-h-[600px] sm:max-w-[300px] sm:max-h-[400px]">
              </div>
              <img :data-src="'/img/right.jpeg'" alt="Cooperation" class="rounded slide-image lg:max-w-[740px] lg:max-h-[800px] w-auto h-auto
                 md:max-w-[400px] md:max-h-[600px] sm:max-w-[300px] sm:max-h-[400px] lazyload">
            </div>
            <!-- Текстовая часть Cooperation -->
            <div class="text-center text-[20px] text-[var(--gold)] animate-block lg:w-1/2 w-full">
              <div class="mb-2 mx-auto w-28 h-28 flex items-center justify-center animate-image">
                <i class="fas fa-handshake text-[var(--gold)] text-[4rem]"></i>
              </div>
              <h2 class="mb-2 lg:text-[40px] text-3xl tracking-[5px] uppercase py-5 animate-text">
                {{ $t("home.cooperation") }}
              </h2>
              <p class="sm:w-1/2 w-full mx-auto md:text-justify text-left pb-5 animate-text">
                {{ $t("home.cooperationDescription") }}
              </p>
              <!-- <animated-button :link="'/about'" :label="$t('home.moreInfo')"></animated-button> -->
            </div>
          </div>
        </div>
      </section>


      <!-- Секция продукции -->
      <!-- <section class="pt-10 pb-2 bg-[var(--pink)]">
        <div class="px-1">
          <h2 class="mb-2 lg:text-[40px] text-3xl tracking-[5px] uppercase pb-10 text-[var(--gold)] text-center">
            {{ $t("home.products") }}
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-2">
            <div v-for="(product, index) in products" :key="index"
              class="relative overflow-hidden animate-block no-scroll">
              <div class="relative h-full">
                <img :src="product.image" :alt="$t(product.titleKey)" class="w-full h-full object-cover animate-image">
                <div
                  class="absolute inset-0 bg-gradient-to-b from-[rgba(10,3,24,0.2)] via-[rgba(17,12,35,0.8)] to-[#15112A] z-10">
                </div>
              </div>
              <div class="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-20">
                <h2 class="mb-2 lg:text-[40px] text-3xl tracking-[5px] uppercase py-5 animate-text">
                  {{ $t(product.titleKey) }}
                </h2>
                <p class="sm:w-1/2 w-full mx-auto text-center pb-5 animate-text hidden md:block">
                  {{ $t(product.descriptionKey) }}
                </p>
                <animated-button :link="'https://eurocosmetics.com.tm/'" :label="$t('home.moreInfo')"></animated-button>
              </div>
            </div>
          </div>
        </div>
      </section> -->

      <!-- Секция логотипов -->
      <section class="py-30 bg-[#F8ECF3]">
        <h2 class="mb-2 lg:text-[40px] text-3xl tracking-[5px] uppercase py-5 text-[var(--gold)] text-center">
          {{ $t("home.brands") }}
        </h2>

        <!-- Десктопная версия -->
        <div class="hidden md:block">
          <div class="swiper desktopSwiper relative">
            <div class="swiper-wrapper">
              <div v-for="n in 22" :key="n" class="swiper-slide">
                <div class="h-80 flex items-center justify-center p-2">
                  <img :data-src="`/img/logo/logo${n}.png`" :alt="`Logo ${n}`" class="max-h-full max-w-full object-contain lazyload">
                </div>
              </div>
            </div>
            <div class="swiper-button-next !text-[#BA9666]"></div>
            <div class="swiper-button-prev !text-[#BA9666]"></div>
          </div>
        </div>

        <!-- Мобильная версия -->
        <div class="block md:hidden">
          <div class="swiper mobileSwiper">
            <div class="swiper-wrapper">
              <div v-for="n in 23" :key="n" class="swiper-slide">
                <div class="w-40 h-40 flex items-center justify-center">
                  <img :data-src="`/img/logo/logo${n}.png`" :alt="`Logo ${n}`" class="w-full h-full object-contain lazyload">
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <location> </location>
      <!-- <social-circles></social-circles> -->

      <section id="contact" class="py-20 bg-[#15112A]">
        <div class="container mx-auto flex flex-col md:flex-row items-center gap-8">
          <div class="md:w-1/2">
            <p class="text-sm uppercase mb-2" style="color: #F0C8E0;">{{ $t("form.contactForm") }}</p>
            <h2 class="lg:text-[40px] text-3xl font-bold uppercase" style="color: #F0C8E0;">
              {{ $t("form.focusOnPartners") }}
            </h2>
            <p class="text-lg mt-4" style="color: #F0C8E0B2;">
              {{ $t("form.description") }}
            </p>
            <div class="flex flex-col items-start justify-center gap-4 mt-3">
              <a href="tel:+99312964867" class="text-[#F0C8E0] hover:underline flex items-center gap-2">
                <i class="fa fa-phone"></i> +993 12 96-48-67
              </a>
              <a href="tel:+99312964866" class="text-[#F0C8E0] hover:underline flex items-center gap-2">
                <i class="fa fa-phone"></i> +993 12 96-48-66
              </a>
              <a href="mailto:sales@eurocosmeticstm.com" class="text-[#F0C8E0] hover:underline flex items-center gap-2">
                <i class="fa fa-envelope"></i> sales@eurocosmeticstm.com
              </a>
              <a href="https://www.instagram.com/eurocosmetics.tm/?hl=ru" target="_blank" rel="noopener noreferrer"
                class="text-[#F0C8E0] hover:underline flex items-center gap-2">
                <i class="fab fa-instagram"></i>instagram.com/eurocosmetics.tm
              </a>
              <a href="https://www.tiktok.com/@eurocosmetics.tm" target="_blank" rel="noopener noreferrer"
                class="text-[#F0C8E0] hover:underline flex items-center gap-2">
                <i class="fab fa-tiktok"></i> tiktok.com/@eurocosmetics.tm
              </a>
            </div>
          </div>
          <div class="lg:w-1/2 w-full">
            <form @submit.prevent="submitForm" class="space-y-4 p-6"
              style="background-color: #20193D5C; border: 2px solid #4D4181; border-radius: 0.5rem;">
              <div>
                <input type="text" v-model="name" :placeholder="$t('form.name')"
                  class="w-full p-2 bg-transparent text-[#C07CA5] border-b-2 border-[#C07CA5] focus:outline-none" />
              </div>
              <div>
                <input type="email" v-model="email" :placeholder="$t('form.email')"
                  class="w-full p-2 bg-transparent text-[#C07CA5] border-b-2 border-[#C07CA5] focus:outline-none" />
              </div>
              <div>
                <input type="tel" v-model="phone" :placeholder="$t('form.phone')"
                  class="w-full p-2 bg-transparent text-[#C07CA5] border-b-2 border-[#C07CA5] focus:outline-none" />
              </div>
              <div>
                <textarea v-model="message" :placeholder="$t('form.message')"
                  class="w-full p-2 bg-transparent text-[#C07CA5] border-b-2 border-[#C07CA5] focus:outline-none"></textarea>
              </div>
              <button type="submit" class="flex items-center justify-center bg-white text-[#C07CA5] px-4 py-2 rounded">
                {{ $t("form.send") }} <span class="ml-2">→</span>
              </button>
            </form>
          </div>
        </div>
      </section>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      loading: true,
      products: [
        {
          image: '/img/cat/cat1.jpg',
          titleKey: 'home.careCosmetics',
          descriptionKey: 'home.careCosmeticsDescription',
        },
        {
          image: '/img/cat/cat2.jpg',
          titleKey: 'home.perfumes',
          descriptionKey: 'home.perfumesDescription',
        },
        {
          image: '/img/cat/cat3.jpg',
          titleKey: 'home.decorativeCosmetics',
          descriptionKey: 'home.decorativeCosmeticsDescription',
        },
        {
          image: '/img/cat/cat4.jpg',
          titleKey: 'home.forChildren',
          descriptionKey: 'home.forChildrenDescription',
        },
        {
          image: '/img/cat/cat5.jpg',
          titleKey: 'home.forMen',
          descriptionKey: 'home.forMenDescription',
        },
        {
          image: '/img/cat/cat6.jpg',
          titleKey: 'home.hairCare',
          descriptionKey: 'home.hairCareDescription',
        },
      ]
    }
  },
  computed: {
    // Разбиваем 23 логотипа на два ряда
    logoRow1() {
      const countRow1 = Math.ceil(23 / 2);
      return Array.from({ length: countRow1 }, (_, i) => i + 1);
    },
    logoRow2() {
      const countRow1 = Math.ceil(23 / 2);
      const countRow2 = 23 - countRow1;
      return Array.from({ length: countRow2 }, (_, i) => i + countRow1 + 1);
    }
  },
  mounted() {
    console.log("Component mounted");
    this.hideLoader();
    window.addEventListener('scroll', this.handleScroll);
    this.animateNumbers(); // Trigger animation on mount
    const script = document.createElement('script');
    script.src = 'js/lazyload.js';
    script.async = true;
    document.body.appendChild(script);

  },
  beforeDestroy() { // или beforeUnmount в Vue3
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    hideLoader() {
      setTimeout(() => {
        this.loading = false;
        this.$nextTick(() => {
          this.animateNumbers();
          if (typeof initAnimations === "function") {
            initAnimations();
          }
        });
      }, 4500);
    },

    handleScroll() {
      if (window.innerWidth < 768) return; // отключаем скролл-эффекты на мобильных устройствах
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      // затрагиваем только элементы без класса "no-scroll"
      document.querySelectorAll('.animate-block:not(.no-scroll)').forEach(el => {
        el.style.transform = `translateY(${scrollTop * 0.03}px)`;
      });
    },
    animateNumbers() {
      const counters = document.querySelectorAll('.animate-number');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const counter = entry.target;
            const target = +counter.getAttribute('data-target');
            const speed = 200; // Adjust speed as needed
            const updateCount = () => {
              const current = +counter.innerText.replace('+', '');
              const increment = Math.ceil(target / speed);
              if (current < target) {
                counter.innerText = `${current + increment}+`;
                setTimeout(updateCount, 10);
              } else {
                counter.innerText = `${target}+`;
              }
            };
            updateCount();
            observer.unobserve(counter); // Stop observing once animated
          }
        });
      }, { threshold: 0.5 }); // Trigger when 50% visible

      counters.forEach(counter => observer.observe(counter));
    },
  },
}
</script>

<style>
/* оверлей */
.loader-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fce7f3;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9998;
}

/* контейнер с фоном из SVG */
.loader {
  position: relative;
  width: 100%;
  height: 100%;
  background: url('/img/fon.svg') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.loader-logo {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 25%;
  height: auto;
  z-index: 10001;
  filter: drop-shadow(0 0 40px rgba(255, 255, 255, 0.8));
}

.logo-wrapper {
  position: relative;
  width: 100%;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-wrapper svg {
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
}
.loader-logo {
  width: 100%;
  height: auto;
  filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.6));
}

.logo-path {
  stroke: #d7b56d;
  stroke-width: 5;
  stroke-dasharray: 3000;
  stroke-dashoffset: 3000;
  fill: none;
  animation:
    draw 2.8s ease-in forwards,
    fillGold 0.8s ease-in forwards 2.8s;
}

@keyframes draw {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes fillGold {
  from {
    fill: transparent;
  }
  to {
    fill: #d7b56d;
  }
}
.logo-letter {
  fill: #d7b56d;
  opacity: 0;
  transform: scale(0.9);
  animation: letterFade 1.6s ease-out forwards;
}


@keyframes letterFade {
  to {
    opacity: 1;
    transform: scale(1);
  }
}
.letter-1 { animation-delay: 0s; }
.letter-2 { animation-delay: 0.4s; }
.letter-3 { animation-delay: 0.8s; }

</style>
