ExtractAI = RegisterBehavior("Extract AI")
ExtractAI.data = {
	secondary = false,
    agent = {
        type = { "cities" },
    },
    target = {
        type = { "oneself" }
    }
}

function ExtractAI:Start()
    self.agent.ai.ExtractAI() -- enables the extraction base on the number of cities
end

