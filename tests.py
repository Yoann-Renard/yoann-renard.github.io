from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.service import Service

## INIT ##
path = r'./chromedriver.exe'
#Options
chrome_options = Options()

"""Sans notif"""
chrome_options.add_argument('disable-notifications')

"""Affichage des images"""
"""chrome_prefs = {}
chrome_options.experimental_options["prefs"] = chrome_prefs
chrome_prefs["profile.default_content_settings"] = {"images": 2}
chrome_prefs["profile.managed_default_content_settings"] = {"images": 2}"""

"""Sans GUI"""
#chrome_options.add_argument("--headless")

"""Driver & links"""
driverserv = Service(executable_path=r"./chromedriver.exe")

driver = webdriver.Chrome(service=driverserv, options=chrome_options)
urls = {
    'projects': 'http://127.0.0.1:5500/projects/',
    '': ''
}

## GENERAL METHODES ##
def WaitFor(methode, selector_type, element, timeout=10) -> bool:
    try:
        # wait for search results to be fetched
        WebDriverWait(driver, timeout).until(
            methode((selector_type, element))
        )
        return True
    except Exception as e:
        print(e)
        return False


def CloseFirstTab():
    """Close first tab if required"""
    driver.switch_to.window(driver.window_handles[0])
    driver.close()
    driver.switch_to.window(driver.window_handles[0])


## TESTING METHODES ##
def projectsTestScrolling() -> bool:
    driver.get(urls['projects'])
    WaitFor(EC.presence_of_element_located, By.CSS_SELECTOR, '.background', 5)

    #### TEST SCROLLING DOWN ####
    driver.execute_script("window.testScrollDown")
    downIsOk = WaitFor(
        EC.presence_of_element_located,
        By.CSS_SELECTOR, '.down-scroll',
        2
    )

    #time.sleep(1.5) # Wait animation

    #### TEST SCROLLING UP ####
    """driver.execute_script("window.testScrollUp")
    upIsOk = not WaitFor(
        EC.presence_of_element_located,
        By.CSS_SELECTOR, '.down-scroll',
        2
    )"""

    return True if downIsOk else False


if __name__ == '__main__':
    print("test for scrolling : ", projectsTestScrolling())
