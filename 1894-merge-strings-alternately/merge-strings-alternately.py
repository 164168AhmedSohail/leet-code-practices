class Solution(object):
    def mergeAlternately(self, word1, word2):
        result=[]
        i,j=0,0
        while i<len(word1) and j<len(word2) :
              result.append(word1[i])
              i+=1
              result.append(word2[j])
              j+=1
        while i<len(word1) :
              result.append(word1[i])
              i+=1
        while j<len(word2) :
              result.append(word2[j])
              j+=1
        return ''.join(result)