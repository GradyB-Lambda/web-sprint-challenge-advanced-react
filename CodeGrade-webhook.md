## Setting up the CodeGrade webhook

1. When you open the assignment in a new window, you will see this. Click on the "Set up git" option

<img width="800" src="https://tk-assets.lambdaschool.com/a92b8d52-6790-4fb3-8ab0-c432a71e6cd3_ScreenShot2020-10-30at8.25.42AM.png" />

2. Next you will choose "GitHub" for the setup process

<img width="800" src="https://tk-assets.lambdaschool.com/57e23d3b-e707-4aa7-878c-a4f54deaad76_ScreenShot2020-10-30at8.25.58AM.png" />

3. Copy the SSH key from the bottom box
<!-- ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQCx4opxjkYK8V796UoGu6ssHzVurNjBFiOmT7J0ApEBWuslDImxzzUx/CwjS9orCO83UdpPSHASp2Dvc37igao5iFFKXOuN9lX3OECAJlED5Qi2vvWK8rbDXkMTrvaNApef/qFL+bhgnB+5l1hfpv131JwAJPDZH3zApttY5RKSBhxcAPhjQKmu81c5A/cbcB6QtApxgFICJFLKletiC286v5sqtcjv/E9CKlQ+QIKWX1Qa5pThn/ExPGFzScwaeD5QlnYELnsfZeug3qbfPoE2xhBKRttuIbiDQF08H45/w9THKs2Ir9za7oBTDn2WD48s3D+lamRbfkUPxY2w5P/lGzg9QRfsmFhYYC5diPWzZN2qiJklOs8Trloum6zorTvnib0yPGQD8c7T+jjotzYf+RyA8Z633oWdVzhpRmqW/AZ3m0Tya7xKxI6miwsQJF5fHpX4h+1EMJdfQ+wGFGqQqiCApG/maE+q32WQ4BxSUlRqLevVW8qXeAMvK3tC0lxWsbfiJ6K1A5zjDR2f16uLOUzOGMUDSvSTz9gj8yt8s3Na6j1cJwerWad24znetmF+ah9AWmGvW1zUoWXe4Bc/KWpuL60y77X23YzzKIEf18Hmll3GaskxnUs6Ki9SPMDq3IEH0m1jivJ/2GZ8MfXbD8R5s5PTyTLcJBXjfqlOkQ== info@codegrade.com -->

<img width="800" src="https://tk-assets.lambdaschool.com/7241f7e8-0f5c-41d3-a03f-2ba60dc5bcc1_ScreenShot2020-10-30at8.26.05AM.png" />

4. Now go to your GitHub account and open the forked repository. Go to _settings_ and on the left go to _Deploy Keys_

<img width="800" src="https://tk-assets.lambdaschool.com/8ba74f4e-86ff-43d1-9cb4-cc3e30b0bda2_ScreenShot2020-10-29at3.36.37PM.png" />

5. Click to add a new Deploy key. You will past the SSH key from CodeGrade into the "Key" input box. Then click "Add key". You will not need a name for the key, and it does not need "write" access

<img width="800" src="https://tk-assets.lambdaschool.com/b699c68c-d3e2-4c51-b87a-42f440f5dadd_ScreenShot2020-10-29at3.36.49PM.png" />

6. In GitHub, still in _settings_, click on _Webhooks_ on the left.

<img width="800" src="https://tk-assets.lambdaschool.com/e625f0f3-bbbb-4af0-9deb-e699bbe1f813_ScreenShot2020-10-29at3.37.14PM.png" />

7. Click on "Add webhook"

8. Go back to CodeGrade and click on the right arrow to go to the next step. Copy the "Payload url" string from the first box.
<!-- https://app.codegra.de/api/v1/webhooks/d79f92f6-df8e-417a-9219-12f7e857e40f  -->

<img width="800" src="https://tk-assets.lambdaschool.com/8730af7a-ecd9-4336-9a21-a6fd2c0256f2_ScreenShot2020-10-30at8.26.13AM.png" />

9. In GitHub, add the url string to the "Payload url" input box.

<img width="800" src="https://tk-assets.lambdaschool.com/74953dd5-8d9c-43f2-a328-ec05e1cca56f_ScreenShot2020-10-29at3.37.44PM.png" />

10. Now do the same for the secret. In CodeGrade, copy the secret from the second box and add it to the "secret" input in GitHub
<!-- f1218b7a16f373c746575dd75aaefba9ee55909c41c1e2f1448dbac10e7ada37 -->

<img width="800" src="https://tk-assets.lambdaschool.com/2afe5b53-cc7d-4dbe-adcd-6435d59ac9ea_ScreenShot2020-10-29at3.38.12PM.png" />

11. Click "Add webhook". Now you are all setup.

12. You can test the setup by going to the 4th step in CodeGrade. Make your first commit to the master branch and push that commit. Then goo back to CodeGrade and click the "Check for new git submission". It may take about 10 secoonds to find a new submission. After that point you should see that there is a new submission, and you're ready to work.
    Í
