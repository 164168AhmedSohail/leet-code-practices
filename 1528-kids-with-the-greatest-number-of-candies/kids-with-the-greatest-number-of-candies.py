class Solution(object):
    def kidsWithCandies(self, candies, extraCandies):
        booleanArray = [] 
        max_candies= max(candies)
        for i in range(len(candies)):
            if candies[i]+ extraCandies>=max_candies:
                booleanArray.append(True)
            else:
                 booleanArray.append(False) 
        return   booleanArray        
        