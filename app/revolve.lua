ExtractAI = RegisterBehavior("Extract AI")
ExtractAI.data = {
    agent = {
        type = { "turn" },
    },
    target = {
        type = { "self" }
    },
    location = {
        x = { ExtractAI.GetInfoX },
        y = { ExtractAI.GetInfoY }
    }
}

function ExtractAI:Start()
    self.agent.ai.ExtractAI() -- enables the extraction base on the number of cities
end


