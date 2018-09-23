import shutil
import subprocess
import os
os.system("npm run build")
#subprocess.call(["npm","run","build"])
try:
	shutil.rmtree('../backend/build')
except:
	pass
shutil.copytree('build','../backend/build')