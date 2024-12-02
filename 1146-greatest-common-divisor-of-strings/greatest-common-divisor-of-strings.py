class Solution(object):
    def gcdOfStrings(self, str1, str2):
        if str1+str2 !=str2 +str1:
         return ""
    
        gcdLength=self.gcd(len(str1),len(str2))
        return str1[:gcdLength]
    def gcd(self,length1,length2):
        if length2==0:
         return length1
        return self.gcd(length2,length1%length2)     
   
        