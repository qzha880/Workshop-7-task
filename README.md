# Workshop-7-task
Workshop 7 task

## Changes made and experiments during coding

<img width="855" alt="截屏2025-01-27 22 08 41" src="https://github.com/user-attachments/assets/f2c2fbd7-52ec-41b1-bde8-7072ed5be7fc" />
<img width="859" alt="截屏2025-01-27 22 19 45" src="https://github.com/user-attachments/assets/5f1e8dd6-d6bd-4e32-bc48-cfac9e7860a8" />

- I want to make a snow environment.
- * I made the snow flakes slowly droping down, and tried with the for loops to get more snow flakes.

<img width="862" alt="截屏2025-01-27 22 33 58" src="https://github.com/user-attachments/assets/c5052c9f-1941-44ba-b761-77b8324892f6" />

- Then, I wanted to create a window glass frozen scene using random walkers.
- * I tried to add random walkers to my sketch, but the walkers replaced snow flakes.
  * I realized that it is hard to use both particle systems and random walkers at the same time. Because, one needs the background code in the setup function, the other one needs it to be in the draw function.

<img width="1222" alt="截屏2025-01-27 23 05 06" src="https://github.com/user-attachments/assets/ad60e20e-19a8-464b-817c-5ea6d9e19cb8" />

- In stead of making a snow environment, I changed my mind to the idea of simulate bugs/mold eating bread.
- * Using and moldy bread image as the background.

<img width="1013" alt="截屏2025-01-27 23 55 51" src="https://github.com/user-attachments/assets/ca60604f-de48-4716-8b4b-639520608e4d" />

- Added checkEdge to make the mold only move on the bread.
- * Sometime if the mold start outside the bread, there will be dots left outside.
  * Changed the area for mold to create, limited in the area on the bread.

At last, changed colour (tried to get the mold colour on the image), mold move speed and size. 


### Problems met
- Nothing is really hard to solve, the small problems are included in the 'Changes made and experiments during coding' section. 


### Here is the URL to the webpage for this project: https://qzha880.github.io/Workshop-7-task/
