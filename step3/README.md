# Creating an OpenShift Application#

1. Sign up for OpenShift Online account https://www.openshift.com/app/account/new

2. Verify your email address

3. Login to web console https://openshift.redhat.com/app/console/applications

4. Go this URL 
	* https://openshift.redhat.com/app/console/application_type/custom?name=hackerpins&cartridges%5B%5D=https://cartreflect-claytondev.rhcloud.com/reflect?github=openshift-cartridges/openshift-wildfly-cartridge&cartridges%5B%5D=postgresql-9&initial_git_url=https://github.com/shekhargulati/hackerpins-drdobbsindia-conference.git
	* Or go to http://bit.ly/hackerpins

5. Click on **Create Application** to create an application. After couple of minutes, you have application deployed at http://hackerpins-{{domain-name}}.rhcloud.com