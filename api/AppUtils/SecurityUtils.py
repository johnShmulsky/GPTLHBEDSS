container_security = {
    'test':'testrole',
    'lbst':'lowerbrule',
    'rst':'rosebud'
    }



def canAccessCase(caseJson, roles):
    #todo use tribal land? tribal affilliation? 
    return False

def canAccessDirectory(container, roles):
    roleCheck = container_security[container]
    assert roleCheck in roles

