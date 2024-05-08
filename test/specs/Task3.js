describe("task3", () => {
    it("tests task3", async () => {
      await browser.setWindowSize(958, 729)
      await browser.url("https://cloud.google.com/")
      await expect(browser).toHaveUrl("https://cloud.google.com/")
      await browser.$("aria/Search").click()
      await browser.$("aria/Search").setValue("Google Cloud Platform Pricing Calculator")
      await browser.$("aria/Search").click()
      await browser.performActions([{
        type: 'key',
        id: 'keyboard',
        actions: [{ type: 'keyDown', value: '' }]
      }])
      await expect(browser).toHaveUrl("https://cloud.google.com/s/results?q=Google+Cloud+Platform+Pricing+Calculator")
      await browser.performActions([{
        type: 'key',
        id: 'keyboard',
        actions: [{ type: 'keyUp', value: '' }]
      }])
      await browser.$("aria/Search").click()
      await browser.$("//*[@id=\"___gcse_0\"]/div/div/div/div[5]/div[2]/div/div/div[1]/div[1]/div/div[1]/div/a/b").click()
      await browser.$("//*[@id=\"ucj-1\"]/div/div/div/div/div/div/div/div[2]/div[1]/div/div[2]/div/button/span[3]").click()
      await browser.$("aria/Compute Engine A secure and customizable compute service that lets you create and run virtual machines on Google’s infrastructure. Add item").click()
      await browser.url("https://cloud.google.com/products/calculator?hl=ro")
      await expect(browser).toHaveUrl("https://cloud.google.com/products/calculator?hl=ro")
      await browser.$("//*[@id=\"ow4\"]/div/div/div/div/div/div/div[1]/div/div[2]/div[1]/div/div/div[1]/div").click()
      await browser.$("aria/Instances").click()
      await browser.$("#c11").click()
      await browser.$("#c11").setValue("4")
      await browser.$("#c12").click()
      await browser.$("#c12").setValue("2")
      await browser.$("#c11").click()
      await browser.$("#c11").setValue("1")
      await browser.$("//*[@id=\"ow4\"]/div/div/div/div/div/div/div[1]/div/div[2]/div[3]/div[7]/div/div[1]/div/div/div/div[1]/div").click()
      await browser.$("aria/Free: Debian, CentOS, CoreOS, Ubuntu or BYOL (Bring Your Own License)").click()
      await browser.$("//*[@id=\"ow4\"]/div/div/div/div/div/div/div[1]/div/div[2]/div[3]/div[9]/div/div/div[2]/div/div/div[1]/label").click()
      await browser.$("//*[@id=\"ow4\"]/div/div/div/div/div/div/div[1]/div/div[2]/div[3]/div[11]/div/div/div[2]/div/div[1]/div[1]/div/div/div/div[1]/div").click()
      await browser.$("aria/General Purpose Best price-performance for general workloads.").click()
      await browser.$("//*[@id=\"ow4\"]/div/div/div/div/div/div/div[1]/div/div[2]/div[3]/div[11]/div/div/div[2]/div/div[1]/div[2]/div/div/div/div[1]/div").click()
      await browser.$("aria/N1 Balanced price/performance").click()
      await browser.$("//*[@id=\"ow4\"]/div/div/div/div/div/div/div[1]/div/div[2]/div[3]/div[11]/div/div/div[2]/div/div[1]/div[3]/div/div/div/div[1]/div").click()
      await browser.$("aria/n1-standard-8 vCPUs: 8, RAM: 30GB").click()
      await browser.$("//*[@id=\"ow4\"]/div/div/div/div/div/div/div[1]/div/div[2]/div[3]/div[15]/div/div/div[2]/div/div/div[1]/label").click()
      await browser.$("//*[@id=\"ow4\"]/div/div/div/div/div/div/div[1]/div/div[2]/div[3]/div[24]/div/div[1]/div/div/div/div[1]/div").click()
      await browser.$("aria/2x375 GB").click()
      await browser.$("//*[@id=\"ow4\"]/div/div/div/div/div/div/div[1]/div/div[2]/div[3]/div[26]/div/div[1]/div/div/div/div[1]/div").click()
      await browser.$("aria/Low CO2 Frankfurt (europe-west3)").click()
      await browser.$("//*[@id=\"ow4\"]/div/div/div/div/div/div/div[1]/div/div[2]/div[3]/div[28]/div/div/div[2]/div/div/div[2]/label").click()
      await browser.$("//*[@id=\"ow4\"]/div/div/div/div/div/div/div[2]/div[1]/div/div[2]/div/button/span[5]").click()
      await browser.$("//*[@id=\"yDmH0d\"]/div[7]/div[2]/div/button/div").click()
      await browser.$("aria/OK, got it").click()
      await browser.$("//*[@id=\"container\"]/div[1]/span[2]/svg/path[1]").click()
      await browser.$("//*[@id=\"ow4\"]/div/div/div/div/div/div/div[2]/div[1]/div/div[3]").click()
      await browser.$("//*[@id=\"ow4\"]/div/div/div/div/div/div/div[2]/div[1]/div/div[4]/div[2]/div[2]/div/button/span[4]").click()
      await browser.$("//*[@id=\"yDmH0d\"]/div[7]/div[2]/div/div/div").click()
      await browser.$("//*[@id=\"yDmH0d\"]/div[7]/div[2]/div/div/div/div[2]/div[1]").click()
      await browser.$("aria/Open estimate summary").click()
      await browser.switchToFrame(
        await browser.$('iframe[src="https://cloud.google.com/products/calculator/estimate-preview/3be6cc76-6f02-4187-9cd9-3bb1e02c65ef?hl=ro"]')
      )
      await browser.$("//*[@id=\"yDmH0d\"]/c-wiz[1]/div/div/div/div/div[2]/div[1]").click()
      await browser.$("aria/Open estimate summary").click()
      await expect(browser).toHaveUrl .$("https://cloud.google.com/products/calculator/estimate-preview/3be6cc76-6f02-4187-9cd9-3bb1e02c65ef?hl=ro").isVisible();
      
    });
  });